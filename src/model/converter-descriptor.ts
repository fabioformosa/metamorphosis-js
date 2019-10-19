import { Converter } from "./converter";

export default class ConverterDescriptor{
  converter:  Converter<NewableFunction, NewableFunction>;
  sourceClass: NewableFunction;
  targetClass : NewableFunction;

  constructor(converter: Converter< NewableFunction, NewableFunction>, sourceClass: NewableFunction, targetClass: NewableFunction){
    this.converter = converter;
    this.sourceClass = sourceClass;
    this.targetClass = targetClass;
  }
}