export default interface IConverter<S, T> {
    convert(source: S): T;
}
