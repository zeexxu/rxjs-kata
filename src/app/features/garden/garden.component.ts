import {Component, OnInit} from '@angular/core';
import {ColDef, GridOptions, ICellEditorParams} from "ag-grid-community";
import {PlantModelFixture} from "./models/fixtures/plant-model-fixture";
import {GrowthRangeRendererComponent} from "./renderers/growth-range-renderer.component";
import {UnitType} from "./models/unit-type";
import {Observable, Observer, Subscriber} from "rxjs";
import {GetRowIdParams} from "ag-grid-community/dist/lib/interfaces/iCallbackParams";
import {PlantModel} from "./models/plant.model";

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {

  moistureObserver: Observer<number> = {
    next: (value) => {
      this.garden.forEach(plant => plant.updateGrowthHealth(value));
      this.gridOptions.api?.setRowData(this.garden);
      this.gridOptions.api?.refreshCells({force : true});
    },
    error: (error) => {
    },
    complete: () => {
    }
  };

  moistureSensor: Observable<number> = new Observable<number>((subscriber: Subscriber<number>) => {
    setInterval(() => {
      subscriber.next(Math.random());
    }, 1000)
  })


  garden = [
    PlantModelFixture.LAVENDER,
    PlantModelFixture.HIBISCUS,
    PlantModelFixture.SUNFLOWER,
    PlantModelFixture.TOMATO
  ];

  colDefs: ColDef[] = [
    {headerName: 'Name', field: 'name', filter: true},
    {
      headerName: 'Moisture range',
      field: 'moistureRange',
      filter: true,
      cellRenderer: GrowthRangeRendererComponent,
      cellRendererParams: (params: ICellEditorParams) => ({
        data: {
          ranges: params.data.moistureRange,
          growthHealth: params.data.growthHealth,
          unit: '%',
          unitType: UnitType.PERCENTAGE
        }
      })
    },
  ];

  gridOptions: GridOptions = {
    columnDefs: this.colDefs,
    rowData: this.garden,
    getRowId: (params: GetRowIdParams<PlantModel>) => params.data.name
  }

  ngOnInit(): void {
    this.moistureSensor.subscribe(this.moistureObserver);
  }
}
