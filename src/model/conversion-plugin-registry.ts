
import { MetamorphosisPlugin } from "./metamorphosis-plugin";

export default class ConversionPluginRegistry{
  private _converters = new Array<MetamorphosisPlugin>();

  public register(conversionPlugin: MetamorphosisPlugin){
    this._converters.push(conversionPlugin);
  }

  public shouldRearrangeSourceType(sourceObj: any, targetClass: NewableFunction): boolean{
    return false;
  }

  public rearrangeSourceType(sourceObj: any, targetClass: NewableFunction): NewableFunction{
    return sourceObj.constructor;
  };
  
};

const conversionPluginRegistry = new ConversionPluginRegistry();
export { conversionPluginRegistry };