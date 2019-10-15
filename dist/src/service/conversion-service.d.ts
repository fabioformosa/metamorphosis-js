export default class ConversionService {
    convert(sourceObj: any, targetClass: {
        new (...args: any): any;
    }): any;
}
