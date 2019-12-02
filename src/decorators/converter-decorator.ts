import { Converter } from '../model/converter';
import ConverterRegistry from '../model/converter-registry';
import { logger } from '../consts/log';

const converterDecorator = (sourceClass: NewableFunction, targetClass: NewableFunction) => {
  return function<T extends {new(...args:any[]):{}}>(ConverterConstructor : T){
    logger.log(`METAMORPHOSIS - Found converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);

    return class extends ConverterConstructor{
      constructor(...args: any[]){
        super(...args);
        converterRegistry.register( <Converter<NewableFunction, NewableFunction>> <unknown>this, sourceClass, targetClass);
        logger.log(`METAMORPHOSIS - Registered new converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);
      }
    }
  };
}

const converterRegistry = new ConverterRegistry();
export { converterRegistry };

export { converterDecorator as Convert };