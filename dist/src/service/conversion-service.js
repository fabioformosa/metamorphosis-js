"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_decorator_1 = require("../decorators/converter-decorator");
class ConversionService {
    convert(sourceObj, targetClass) {
        const converter = converter_decorator_1.converterRegistry.getConverter(sourceObj.constructor, targetClass);
        if (!converter)
            throw new Error(`Not found any converter to transform ${sourceObj.constructor.name} into ${targetClass.name}`);
        return converter.convert(sourceObj);
    }
}
exports.default = ConversionService;
//# sourceMappingURL=conversion-service.js.map