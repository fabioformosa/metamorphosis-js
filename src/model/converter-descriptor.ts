import Converter from "./converter";

export default class ConverterDescriptor{
  converter:  Converter<{ new(...args: any): any }, { new(...args: any): any }>;
  sourceClass: { new(): any };
  targetClass : { new(): any };

  constructor(converter: Converter<{ new(...args: any): any}, { new(...args: any): any }>, sourceClass: { new(...args: any): any }, targetClass: { new(...args: any): any}){
    this.converter = converter;
    this.sourceClass = sourceClass;
    this.targetClass = targetClass;
  }
}