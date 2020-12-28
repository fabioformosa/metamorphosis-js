import { Converter } from '../model/converter';
import ConverterRegistry, {converterRegistrySingleton} from '../model/converter-registry';
import { logger } from '../consts/log';

const converterDecorator = (sourceClass: NewableFunction, targetClass: NewableFunction) => {
  return function<T extends {new(...args:any[]):{}}>(ConverterConstructor : T){
    logger.log(`METAMORPHOSIS - Found converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);

    return class extends ConverterConstructor{
      constructor(...args: any[]){
        super(...args);
        converterRegistrySingleton.register( <Converter<NewableFunction, NewableFunction>> <unknown>this, sourceClass, targetClass);
        logger.log(`METAMORPHOSIS - Registered new converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);
      }
    }
  };
}

export { converterDecorator as Convert };
