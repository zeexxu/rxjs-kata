import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GardenComponent } from './garden/garden.component';
import {AgGridModule} from "ag-grid-angular";
import {GrowthRangeRendererComponent} from "./garden/renderers/growth-range-renderer.component";



@NgModule({
  declarations: [
    GardenComponent,
    GrowthRangeRendererComponent
  ],
  exports: [
    GardenComponent,
    GrowthRangeRendererComponent
  ],
  imports: [
    CommonModule,
    AgGridModule
  ]
})
export class FeaturesModule { }
