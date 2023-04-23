import {PlantFixture} from "./fixtures/plant.fixture";

export interface Plant {
  name: string,
  moistureRange: [number, number]
}

export class PlantModel implements Plant {
  constructor(public name : string, public moistureRange : [number, number]) {
  }

}
