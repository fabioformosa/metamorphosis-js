export interface MetamorphosisPlugin{

  shouldRearrangeSourceType(sourceObj: any, targetClass: NewableFunction): boolean;
  rearrangeSourceType(sourceObj: any, targetClass: NewableFunction): NewableFunction;

}
