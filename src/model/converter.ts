export default interface Converter<S, T>{

  convert(source: S): T;

}