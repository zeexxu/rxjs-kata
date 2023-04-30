import {GrowthHealth} from "./growth-health";

export interface Plant {
  name: string,
  moistureRange: [number, number],
  growthHealth?: GrowthHealth

  get GrowthHealth(): GrowthHealth,

  updateGrowthHealth(data: number): void,
}

export class PlantModel implements Plant {
  constructor(public name: string, public moistureRange: [number, number], public growthHealth?: GrowthHealth) {
  }

  updateGrowthHealth(data: number): void {
    if (data > this.moistureRange[0] && data < this.moistureRange[1]) {
      this.growthHealth = GrowthHealth.GOOD;
      return;
    }
    this.growthHealth = GrowthHealth.BAD;
  }

  get GrowthHealth(): GrowthHealth {
    return this.growthHealth!;
  }
}
