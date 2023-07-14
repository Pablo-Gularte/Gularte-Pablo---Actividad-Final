import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BusesAdministrationRoutingModule } from './buses-administration-routing.module';
import { BusesListComponent } from "./buses-list/buses-list.component";
import { BusesDetailComponent } from './buses-detail/buses-detail.component';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [BusesListComponent, BusesDetailComponent],
  imports: [
    CommonModule,
    BusesAdministrationRoutingModule,
    NgFor,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule
  ],
  exports: [
    BusesListComponent,
    BusesDetailComponent
  ]
})
export class BusesAdministrationModule { }
