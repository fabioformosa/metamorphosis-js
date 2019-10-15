import IConverter from "./converter";
export default class ConverterRegistry {
    private _converters;
    register(converter: IConverter<{
        new (...args: any): any;
    }, {
        new (...args: any): any;
    }>, sourceClass: {
        new (...args: any): any;
    }, targetClass: {
        new (...args: any): any;
    }): void;
    getConverter(source: {
        new (...args: any): any;
    }, target: {
        new (...args: any): any;
    }): IConverter<{
        new (...args: any): any;
    }, {
        new (...args: any): any;
    }> | null;
}
