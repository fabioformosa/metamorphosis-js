import {converterRegistry} from '../decorators/converter-decorator';
import { debug, logger } from 'src/consts/log';

export class ConversionService {

  constructor({debugMode} : { debugMode: boolean} = {debugMode: false}){
      debug.enable = debugMode;
      logger.log(`Set debugMode ${JSON.stringify(debug)}`);
  }

  convert(sourceObj: any, targetClass: NewableFunction): any{
    const converter = converterRegistry.getConverter(sourceObj.constructor, targetClass);
    if(!converter)
      throw new Error(`Not found any converter to transform ${sourceObj.constructor.name} into ${targetClass.name}`);
    return converter.convert(sourceObj);
  }
  
  convertBySource(sourceObj: any, sourceClass: NewableFunction, targetClass: NewableFunction): any{
    const converter = converterRegistry.getConverter(sourceClass, targetClass);
    if(!converter)
      throw new Error(`Not found any converter to transform ${sourceClass.name} into ${targetClass.name}`);
    return converter.convert(sourceObj);
  }

}

