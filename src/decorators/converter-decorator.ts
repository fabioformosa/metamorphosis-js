import { Converter } from '../model/converter';
import {converterRegistrySingleton} from '../model/converter-registry';
import { logger } from '../consts/log';

const converterDecorator = (sourceClass: NewableFunction, targetClass: NewableFunction) => {
  return function<T extends {new(...args:any[]):{}}>(ConverterConstructor : T){
    logger.log(`METAMORPHOSIS - Found converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);

    const wrappedConstructor : any = class extends ConverterConstructor{
      constructor(...args: any[]){
        super(...args);
        converterRegistrySingleton.register( <Converter<NewableFunction, NewableFunction>> <unknown>this, sourceClass, targetClass);
        logger.log(`METAMORPHOSIS - Registered new converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);
      }
    }

    // const wrappedConstructor : any = function (...args:any[]) {
    //   const wrappedObj =  new ConverterConstructor(...args);
    //   converterRegistrySingleton.register( <Converter<NewableFunction, NewableFunction>> <unknown>wrappedObj, sourceClass, targetClass);
    //   logger.log(`METAMORPHOSIS - Registered new converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);
    //   return wrappedObj;
    // }

    // return class extends ConverterConstructor{
    //   constructor(...args: any[]){
    //     super(...args);
    //     converterRegistrySingleton.register( <Converter<NewableFunction, NewableFunction>> <unknown>this, sourceClass, targetClass);
    //     logger.log(`METAMORPHOSIS - Registered new converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);
    //   }
    // }

    // wrappedConstructor.prototype = ConverterConstructor.prototype;
    Object.defineProperty(wrappedConstructor, 'name', {value: ConverterConstructor.name, writable: false});
    return wrappedConstructor;
  };
}

export { converterDecorator as Convert };
