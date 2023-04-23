import {Plant} from "../plant.model";

export class PlantFixture {
  static LAVENDER: Plant = {name: "Lavender", moistureRange: [0.3, 0.7]};
  static HIBISCUS: Plant = {name: "Hibiscus", moistureRange: [0.6, 0.8]};
  static SUNFLOWER: Plant = {name: "Sunflower", moistureRange: [0.4, 0.7]};
  static TOMATO: Plant = {name: "tomato", moistureRange: [0.7, 0.9]};
}
