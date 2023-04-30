import {PlantModel} from "../plant.model";

export class PlantModelFixture {
  static LAVENDER: PlantModel = new PlantModel("Lavender", [0.3, 0.7]);
  static HIBISCUS: PlantModel = new PlantModel("Hibiscus", [0.6, 0.8]);
  static SUNFLOWER: PlantModel = new PlantModel("Sunflower", [0.4, 0.7]);
  static TOMATO: PlantModel = new PlantModel("tomato", [0.7, 0.9]);
}
