import ConverterRegistry from '../model/converter-registry';
declare const converterDecorator: (sourceClass: new (...args: any) => any, targetClass: new (...args: any) => any) => <T extends new (...args: any[]) => {}>(ConverterConstructor: T) => any;
declare const converterRegistry: ConverterRegistry;
export { converterRegistry };
export { converterDecorator as Converter };
