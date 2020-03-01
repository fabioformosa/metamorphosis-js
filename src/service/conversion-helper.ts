import {converterRegistry} from '../decorators/converter-decorator';
import { debugOpts, logger as loggerObj } from '../consts/log';
import { pluginRegistry } from "../model/plugin-registry";
import { MetamorphosisPlugin } from "../model/metamorphosis-plugin";


export class ConversionHelper {

  constructor({logger, plugins = []} :
                { logger: boolean | ((msg: string) => void), plugins?: MetamorphosisPlugin[]} = {logger: false, plugins: []} ){
    debugOpts.enable = logger !== false;
    if(debugOpts.enable && typeof logger === "function")
      debugOpts.fn =  logger;
    if(plugins)
      plugins.forEach(pluginRegistry.register.bind(pluginRegistry));
    loggerObj.log(`METAMORPHOSIS - Created conversion service with debugOpts ${debugOpts.enable}`);
  }

  convert(sourceObj: any, targetClass: NewableFunction): Promise<unknown>{
    if(pluginRegistry.shouldRearrangeSourceType(sourceObj, targetClass)){
      const actualSourceType = pluginRegistry.rearrangeSourceType(sourceObj, targetClass);
      loggerObj.log(`METAMORPHOSIS - Rearranged sourceType ${sourceObj.constructor.name} into ${actualSourceType}`);
      return this.convertBySource(sourceObj, actualSourceType, targetClass);
    }
    else
      return this._internalConvert(sourceObj, sourceObj.constructor, targetClass);
  }
  
  convertBySource(sourceObj: any, sourceClass: NewableFunction, targetClass: NewableFunction): any{
    return this._internalConvert(sourceObj, sourceClass, targetClass);

  }

  private async _internalConvert(sourceObj: any, sourceClass: NewableFunction, targetClass: NewableFunction) : Promise<unknown>{
    const converter = converterRegistry.getConverter(sourceClass, targetClass);
    if(!converter)
      throw new Error(`METAMORPHOSIS - Not found any converter to transform source ${sourceClass.name} into ${targetClass.name}`);
    return await Promise.resolve( converter.convert(sourceObj));
  }

}

