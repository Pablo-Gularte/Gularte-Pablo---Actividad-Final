import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';

import { BusesAdministrationRoutingModule } from './buses-administration-routing.module';
import { BusesListComponent } from "./buses-list/buses-list.component";
import { BusesDetailComponent } from './buses-detail/buses-detail.component';


@NgModule({
  declarations: [BusesListComponent, BusesDetailComponent],
  imports: [
    CommonModule,
    BusesAdministrationRoutingModule,
    NgFor,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatGridListModule
  ],
  exports: [
    BusesListComponent,
    BusesDetailComponent
  ]
})
export class BusesAdministrationModule { }
