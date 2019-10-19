import ConverterDescriptor from "./converter-descriptor";
import {Converter} from "./converter";

export default class ConverterRegistry{
  private _converters = new Array<ConverterDescriptor>();

  public register(converter: Converter< NewableFunction, NewableFunction>, sourceClass: NewableFunction, targetClass: NewableFunction){
    this._converters.push(new ConverterDescriptor(converter, sourceClass, targetClass));
  }

  public getConverter(source: NewableFunction,  target: NewableFunction): Converter<NewableFunction, NewableFunction> | null {
    const foundConverterDescriptor = this._converters.find(converterDescriptor => converterDescriptor.sourceClass === source && converterDescriptor.targetClass === target);
    return (foundConverterDescriptor && foundConverterDescriptor.converter) || null;
  }
};