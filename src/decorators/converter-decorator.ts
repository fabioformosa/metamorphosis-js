import { Converter } from '../model/converter';
import ConverterRegistry from '../model/converter-registry';

const converterDecorator = (sourceClass: { new(...args: any): any }, targetClass: { new(...args: any): any }) => {
  return function<T extends {new(...args:any[]):{}}>(ConverterConstructor : T){
    console.log(`Found converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);

    const wrappedConverterConstructor: any = function (...args: any) {
        // console.log(`New: ${ConverterConstructor['name']} is created`);
        let converterInstance = new ConverterConstructor(...args);
        converterRegistry.register( <Converter<{ new(...args: any): any}, { new(...args: any): any }>> converterInstance, sourceClass, targetClass);
        return converterInstance;
    }
    wrappedConverterConstructor.prototype = ConverterConstructor.prototype;

    return wrappedConverterConstructor;
  };
}


const converterRegistry = new ConverterRegistry();
export { converterRegistry };

export { converterDecorator as Convert };