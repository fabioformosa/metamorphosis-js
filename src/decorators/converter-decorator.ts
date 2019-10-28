import { Converter } from '../model/converter';
import ConverterRegistry from '../model/converter-registry';
import { logger } from 'src/consts/log';

const converterDecorator = (sourceClass: NewableFunction, targetClass: NewableFunction) => {
  return function<T extends {new(...args:any[]):{}}>(ConverterConstructor : T){
    logger.log(`Found converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);

    return class extends ConverterConstructor{
      constructor(...args: any[]){
        super(...args);
        converterRegistry.register( <Converter<NewableFunction, NewableFunction>> <unknown>this, sourceClass, targetClass);
        logger.log(`Registered new converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);
      }
    }
  };
}
// const converterDecorator = (sourceClass: NewableFunction, targetClass: NewableFunction) => {
//   return function<T extends {new(...args:any[]):{}}>(ConverterConstructor : T){
//     console.log(`Found converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);

//     const wrappedConverterConstructor: any = function (...args: any) {
//         // console.log(`New: ${ConverterConstructor['name']} is created`);
//         let converterInstance = new ConverterConstructor(...args);
//         converterRegistry.register( <Converter<NewableFunction, NewableFunction>> converterInstance, sourceClass, targetClass);
//         return converterInstance;
//     }
//     wrappedConverterConstructor.prototype = ConverterConstructor.prototype;

//     return wrappedConverterConstructor;
//   };
// }

const converterRegistry = new ConverterRegistry();
export { converterRegistry };

export { converterDecorator as Convert };