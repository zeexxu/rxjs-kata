import {ICellRendererAngularComp} from "ag-grid-angular";
import {GridApi, ICellRendererParams} from "ag-grid-community";
import {Component} from "@angular/core";
import {UnitType} from "../models/unit-type";
import {GrowthHealth} from "../models/growth-health";

@Component({
  template: `
    <div style="display: flex; justify-content: space-between;">
      <span>{{ranges}}</span>
      <span>{{growthHealth}}</span>
    </div>
  `
})
export class GrowthRangeRendererComponent implements ICellRendererAngularComp {
  private _params: ICellRendererParams | null = null;
  private _gridApi : GridApi | null = null;
  private _ranges: [number, number] = [0, 0];
  private _unit: string = '';
  private _unitType: UnitType = UnitType.VALUE;
  private _growthHealth: GrowthHealth = GrowthHealth.BAD;


  agInit(params: ICellRendererParams): void {
    this._params = params;
    this._gridApi = params.api;
    this._ranges = params.data.ranges;
    this._unit = params.data.unit;
    this._unitType = params.data.unitType;
    this._growthHealth = params.data.growthHealth;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  get ranges() {
    return this._unitType == UnitType.PERCENTAGE ? `${this._ranges[0] * 100 + this._unit} - ${this._ranges[1] * 100 + this._unit}` : '';
  }


  get growthHealth(): GrowthHealth {
    return this._growthHealth;
  }
}
