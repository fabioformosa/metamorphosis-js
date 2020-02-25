import {converterRegistry} from '../decorators/converter-decorator';
import { debugOpts, logger as loggerObj } from '../consts/log';
import { pluginRegistry } from "../model/plugin-registry";



export class ConversionHelper {

  constructor({logger} : { logger: boolean | ((msg: string) => void)} = {logger: false}){
    debugOpts.enable = logger !== false;
      if(debugOpts.enable && typeof logger === "function")
      debugOpts.fn =  logger;
      loggerObj.log(`METAMORPHOSIS - Created conversion service with debugOpts ${debugOpts.enable}`);
  }

  convert(sourceObj: any, targetClass: NewableFunction): any{
    if(pluginRegistry.shouldRearrangeSourceType(sourceObj, targetClass)){
      const actualSourceType = pluginRegistry.rearrangeSourceType(sourceObj, targetClass);
      loggerObj.log(`METAMORPHOSIS - Rearranged sourceType ${sourceObj.constructor} into ${actualSourceType}`);
      return this.convertBySource(sourceObj, actualSourceType, targetClass);
    }
    else
      return this._internalConvert(sourceObj, sourceObj.constructor, targetClass);
  }
  
  convertBySource(sourceObj: any, sourceClass: NewableFunction, targetClass: NewableFunction): any{
    return this._internalConvert(sourceObj, sourceClass, targetClass);

  }

  private _internalConvert(sourceObj: any, sourceClass: NewableFunction, targetClass: NewableFunction){
    const converter = converterRegistry.getConverter(sourceClass, targetClass);
    if(!converter)
      throw new Error(`METAMORPHOSIS - Not found any converter to transform source ${sourceClass.name} into ${targetClass.name}`);
    return converter.convert(sourceObj);
  }

}

