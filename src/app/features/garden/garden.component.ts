import {Component} from '@angular/core';
import {ColDef, ICellEditorParams, ValueGetterParams} from "ag-grid-community";
import {PlantFixture} from "./models/fixtures/plant.fixture";
import {GrowthRangeRendererComponent} from "./renderers/growth-range-renderer.component";
import {UnitType} from "./models/unit-type";

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent {
  garden = [
    PlantFixture.LAVENDER,
    PlantFixture.HIBISCUS,
    PlantFixture.SUNFLOWER,
    PlantFixture.TOMATO
  ];

  colDefs: ColDef[] = [
    {headerName: 'Name', field: 'name', filter: true},
    {
      headerName: 'Moisture range',
      field: 'moistureRange',
      filter: true,
      cellRenderer: GrowthRangeRendererComponent,
      valueGetter: (params: ValueGetterParams) => params.data.moistureRange,
      cellRendererParams: (params: ICellEditorParams) => ({
        data: {
          ranges: params.value,
          unit: '%',
          unitType: UnitType.PERCENTAGE
        }
      })
    },
  ];
}
