import Manufacturer  from "./manufacturer";

export default class car {

  model: string;
  color: string;
  manufacturer: Manufacturer;

  constructor(model: string, color: string, manufacturer: Manufacturer) {
    this.model = model;
    this.color = color;
    this.manufacturer = manufacturer
  }
}