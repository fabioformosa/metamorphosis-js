"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_registry_1 = require("../model/converter-registry");
const converterDecorator = (sourceClass, targetClass) => {
    return function (ConverterConstructor) {
        console.log(`Found converter ${ConverterConstructor.name} for ${sourceClass.name} to ${targetClass.name}`);
        const wrappedConverterConstructor = function (...args) {
            // console.log(`New: ${ConverterConstructor['name']} is created`);
            let converterInstance = new ConverterConstructor(...args);
            converterRegistry.register(converterInstance, sourceClass, targetClass);
            return converterInstance;
        };
        wrappedConverterConstructor.prototype = ConverterConstructor.prototype;
        return wrappedConverterConstructor;
    };
};
exports.Convert = converterDecorator;
const converterRegistry = new converter_registry_1.default();
exports.converterRegistry = converterRegistry;
//# sourceMappingURL=converter-decorator.js.map