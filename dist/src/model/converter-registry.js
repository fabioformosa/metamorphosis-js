"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_descriptor_1 = require("./converter-descriptor");
class ConverterRegistry {
    constructor() {
        this._converters = new Array();
    }
    register(converter, sourceClass, targetClass) {
        this._converters.push(new converter_descriptor_1.default(converter, sourceClass, targetClass));
    }
    getConverter(source, target) {
        const foundConverterDescriptor = this._converters.find(converterDescriptor => converterDescriptor.sourceClass === source && converterDescriptor.targetClass === target);
        return (foundConverterDescriptor && foundConverterDescriptor.converter) || null;
    }
}
exports.default = ConverterRegistry;
;
//# sourceMappingURL=converter-registry.js.map