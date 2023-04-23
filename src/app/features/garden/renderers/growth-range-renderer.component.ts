import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";
import {Component} from "@angular/core";
import {UnitType} from "../models/unit-type";

@Component({
  template: `<span>{{ranges}}</span>`
})
export class GrowthRangeRendererComponent implements ICellRendererAngularComp {
  params: ICellRendererParams | null = null;
  private _ranges: [number, number] = [0, 0];
  private _unit: string = '';
  private unitType: UnitType = UnitType.VALUE;

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this._ranges = params.data.ranges;
    this._unit = params.data.unit;
    this.unitType = params.data.unitType;
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }

  get ranges() {
    return this.unitType == UnitType.PERCENTAGE ? `${this._ranges[0] * 100 + this._unit} - ${this._ranges[1] * 100 + this._unit}` : '';
  }

}
