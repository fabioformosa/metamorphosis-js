import IConverter from '../converter';

class ConverterDescriptor{
  converter:  IConverter<{ new(...args: any): any }, { new(...args: any): any }>;
  sourceClass: { new(): any };
  targetClass : { new(): any };

  constructor(converter: IConverter<{ new(...args: any): any}, { new(...args: any): any }>, sourceClass: { new(...args: any): any }, targetClass: { new(...args: any): any}){
    this.converter = converter;
    this.sourceClass = sourceClass;
    this.targetClass = targetClass;
  }
}

class ConverterRegistry{
  private _converters = new Array<ConverterDescriptor>();

  public register(converter: IConverter<{ new(...args: any): any}, { new(...args: any): any }>, sourceClass: { new(...args: any): any }, targetClass: { new(...args: any): any }){
    this._converters.push(new ConverterDescriptor(converter, sourceClass, targetClass));
  }

  public getConverter(source: { new(...args: any): any },  target: { new(...args: any): any }): IConverter<{ new(...args: any): any }, { new(...args: any): any }> | null {
    const foundConverterDescriptor = this._converters.find(converterDescriptor => converterDescriptor.sourceClass === source && converterDescriptor.targetClass === target);
    return (foundConverterDescriptor && foundConverterDescriptor.converter) || null;
  }
};

const converterDecorator = (sourceClass: { new(...args: any): any }, targetClass: { new(...args: any): any }) => {
  return function(converterConstructor : Function){
    console.log(`Found converter ${converterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);
    const originalConstructor = converterConstructor;

    function callConstructorWithArgs(constructor: Function, args: any) {
        const c: any = function () {
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }

    const wrappedConverterConstructor: any = function (...args: any) {
        console.log(`New: ${originalConstructor['name']} is created`);
        let converterInstance = callConstructorWithArgs(originalConstructor, args);
        converterRegistry.register(converterInstance, sourceClass, targetClass);
        return converterInstance;
    }

    wrappedConverterConstructor.prototype = originalConstructor.prototype;

    return wrappedConverterConstructor;
  };
}


const converterRegistry = new ConverterRegistry();
export { converterRegistry };

export { converterDecorator as Converter };