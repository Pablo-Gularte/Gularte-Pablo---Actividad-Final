import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { BusesAdministrationRoutingModule } from './buses-administration-routing.module';
import { BusesListComponent } from "./buses-list/buses-list.component";
import { BusesDetailComponent } from './buses-detail/buses-detail.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [BusesListComponent, BusesDetailComponent],
  imports: [
    CommonModule,
    BusesAdministrationRoutingModule,
    CdkAccordionModule,
    NgFor,
    MatIconModule
  ],
  exports: [
    BusesListComponent,
    BusesDetailComponent
  ]
})
export class BusesAdministrationModule { }
