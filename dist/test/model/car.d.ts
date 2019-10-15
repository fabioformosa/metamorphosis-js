import Manufacturer from "./manufacturer";
export default class Car {
    model: string;
    color: string;
    manufacturer: Manufacturer;
    constructor(model: string, color: string, manufacturer: Manufacturer);
}
