import {converterRegistry} from './decorators/converter-decorator';

export default class ConversionService {

  convert(sourceObj: any, targetClass:{ new(...args: any): any }): any{
    const converter = converterRegistry.getConverter(sourceObj.constructor, targetClass);
    if(!converter)
      throw new Error(`Not found any converter from ${sourceObj.constructor.name} to ${targetClass.name}`);
    return converter.convert(sourceObj);
  }

}

