import {converterRegistry} from '../decorators/converter-decorator';

export class ConversionService {

  convert(sourceObj: any, targetClass:{ new(...args: any): any }): any{
    const converter = converterRegistry.getConverter(sourceObj.constructor, targetClass);
    if(!converter)
      throw new Error(`Not found any converter to transform ${sourceObj.constructor.name} into ${targetClass.name}`);
    return converter.convert(sourceObj);
  }

}

