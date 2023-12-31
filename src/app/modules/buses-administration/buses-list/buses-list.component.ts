import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Bus } from 'src/app/models/bus';
import { BusService } from 'src/app/services/bus.service';


@Component({
  selector: 'app-buses-list',
  templateUrl: './buses-list.component.html',
  styleUrls: ['./buses-list.component.css']
})
export class BusesListComponent implements OnInit {
  items: Bus[] = [];
  busSeleccionado: Bus = null;

  constructor(
      private busService: BusService,
      private router: Router,
      private matSnackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.cargarBuses();
  }

  cargarBuses() {
    this.busService.findAll().subscribe(res => {
      if(res.body) {
        this.items = res.body.map(json => new Bus(json.id, json.patente, json.cantidadAsientos, json.modeloId));
      }
    });
  }

  seleccionarBus(Bus:Bus) {
    this.router.navigate(['buses','detail', Bus.id]);
  }

  crearBus() {
    this.router.navigate(['buses','create']);
    // this.router.navigate(['buses','create']);
  }

  borrarBus(Bus: Bus) {
    this.busService.borrarBus(Bus.id).subscribe(res => {
      this.matSnackBar.open("Se borro correctamente el colectivo", "Cerrar");
      this.cargarBuses();
    }, error => {
      console.log(error);
      this.matSnackBar.open(error, "Cerrar");
    });
  }
}
