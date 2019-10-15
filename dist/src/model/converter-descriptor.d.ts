import IConverter from "./converter";
export default class ConverterDescriptor {
    converter: IConverter<{
        new (...args: any): any;
    }, {
        new (...args: any): any;
    }>;
    sourceClass: {
        new (): any;
    };
    targetClass: {
        new (): any;
    };
    constructor(converter: IConverter<{
        new (...args: any): any;
    }, {
        new (...args: any): any;
    }>, sourceClass: {
        new (...args: any): any;
    }, targetClass: {
        new (...args: any): any;
    });
}
