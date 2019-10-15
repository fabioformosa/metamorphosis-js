import ConverterDescriptor from "./converter-descriptor";
import IConverter from "./converter";

export default class ConverterRegistry{
  private _converters = new Array<ConverterDescriptor>();

  public register(converter: IConverter<{ new(...args: any): any}, { new(...args: any): any }>, sourceClass: { new(...args: any): any }, targetClass: { new(...args: any): any }){
    this._converters.push(new ConverterDescriptor(converter, sourceClass, targetClass));
  }

  public getConverter(source: { new(...args: any): any },  target: { new(...args: any): any }): IConverter<{ new(...args: any): any }, { new(...args: any): any }> | null {
    const foundConverterDescriptor = this._converters.find(converterDescriptor => converterDescriptor.sourceClass === source && converterDescriptor.targetClass === target);
    return (foundConverterDescriptor && foundConverterDescriptor.converter) || null;
  }
};