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
    ReactiveFormsModule
  ],
  exports: [
    BusesListComponent,
    BusesDetailComponent
  ]
})
export class BusesAdministrationModule { }
