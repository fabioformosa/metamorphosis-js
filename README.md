[![Build Status](https://travis-ci.org/fabioformosa/metamorphosis-js.svg?branch=master)](https://travis-ci.org/fabioformosa/metamorphosis-js)
[![Coverage Status](https://coveralls.io/repos/github/fabioformosa/metamorphosis-js/badge.svg?branch=master)](https://coveralls.io/github/fabioformosa/metamorphosis-js?branch=master)

# METAMORPHOSIS-JS

> "Nothing is lost, nothing is created, everything is transformed"
> _Lavoisier

**Metamorphosis-js** is the javascript/typescript version of [**Metamorphosis**](https://fabioformosa.github.io/metamorphosis), an utility library to ease conversions of objects, provided as java, javascript and NestJS as well.

![Chameleon - ph. George Lebada - pexels.com!](https://images.pexels.com/photos/754104/pexels-photo-754104.jpeg?auto=compress&cs=tinysrgb&h=325&w=470 " Chameleon - ph. Egor Kamelev - pexels.com")


## QUICK START

### INSTALL
`npm install --save @fabio.formosa/metamorphosis`

### NEW CONVERTER

Create a new converter class, implementing the interface `Converter<Source, Target>` and decorate the class with `@Convert`

```
import { Convert, Converter } from '@fabio.formosa/metamorphosis';

@Convert(Car, CarDto)
export default class CarToCarDtoConverter implements Converter<Car, CarDto> {
  
  public convert(source: Car): CarDto {
    const target = new CarDto();
    target.color = source.color;
    target.model = source.model;
    target.manufacturerName = source.manufacturer.name;
    return target;
  }

}
```
### CREATE CONVERTER INSTANCE

```
const carToCarDtoConverter = new CarToCarDtoConverter();
```
Since they are decorated with `@Converter`, converters register theyself in a conversion registry.

### USE CONVERSION HELPER

```
import { ConversionHelper } from '@fabio.formosa/metamorphosis'
...
ConversionHelper conversionHelper = new ConversionHelper();
const carDto = <CarDto> await conversionHelper.convert(car, CarDto);
```

if source hasn't `Car` as constructor name, you can specify the source type, so:

```
const carDto = <CarDto> await conversionHelper.convertBySource(car, Car, CarDto);
```

### ASYNC CONVERSIONS

If your converter must be async (_eg. it must retrieve entities from DB_):

```
@Injectable()
@Convert(PlanetDto, Planet)
export default class PlanetDtoToPlanet implements Converter<PlanetDto, Promise<Planet>> {
  
  async convert(source: PlanetDto): Promise<Planet> {
   ...
  }

}
```
 * Define Planet as target type in `@Convert` 
 * declare `Promise<Planet>` in `Converter interface`. 
 * The convert method will be `async`.

When you invoke conversionService you must apply `await` if you know for that conversion is returned a `Promise`.

```
const planet = <Planet> await conversionHelper.convert(planetDto, Planet);
```

### DEBUG MODE

Debug mode shows log in console by default:
```
import { ConversionHelper } from '@fabio.formosa/metamorphosis'
...
ConversionHelper conversionHelper = new ConversionHelper({logger: true});
```

or you can pass a custom log function:
```
import { ConversionHelper } from '@fabio.formosa/metamorphosis'
...
ConversionHelper conversionHelper = new ConversionHelper({logger: msg => console.log(msg) });
```


## REQUIREMENTS
* TypeScript 3.2+
* Node 8, 10+
* emitDecoratorMetadata and experimentalDecorators must be enabled in tsconfig.json

## CREDITS
Chameleon in this README file is a picture of ph. Egor Kamelev (pexels.com)
