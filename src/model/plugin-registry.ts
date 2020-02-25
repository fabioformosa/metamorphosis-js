import { MetamorphosisPlugin } from "./metamorphosis-plugin";

class PluginRegistry{
  private _plugins = new Array<MetamorphosisPlugin>();

  public register(plugin: MetamorphosisPlugin){
    this._plugins.push(plugin);
  }

  shouldRearrangeSourceType(sourceObj: any, targetClass: NewableFunction): boolean{
    const ret = this._plugins.reduce((acc, currPlugin) => {
      return acc || currPlugin.shouldRearrangeSourceType(sourceObj, targetClass);
    },false);
    return ret;
  }

   rearrangeSourceType(sourceObj: any, targetClass: NewableFunction): NewableFunction{
     const foundPlugin = this._plugins.find(p => p.shouldRearrangeSourceType(sourceObj, targetClass));
     const rearrangedPlugin =  foundPlugin &&  foundPlugin.rearrangeSourceType(sourceObj, targetClass);
     return rearrangedPlugin || sourceObj.constructor;
   }

};

const pluginRegistry = new PluginRegistry();
export {pluginRegistry};
