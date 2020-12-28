## **v4.1.1** 

Moved converterRegistry from converter-decorator.ts to converter-registry.ts and renamed it in converterRegistrySingleton.
This is not a breaking change, because converterRegistry is supposed to be not used directly.

---
## **v4.0.0** 

**BREAKING CHANGE** convertionHelper now returns always a Promise also if all converters are not async. So, you must add `await` before all conversionHelper calls.

from
```
const carDto = conversionHelper.convert(car, CarDto);
  or
const carDto =  conversionHelper.convertBySource(car, Car, CarDto);
```
to
```
const carDto = <CarDto> await conversionHelper.convert(car, CarDto);
  or
const carDto = <CarDto> await conversionHelper.convertBySource(car, Car, CarDto);
```

---

