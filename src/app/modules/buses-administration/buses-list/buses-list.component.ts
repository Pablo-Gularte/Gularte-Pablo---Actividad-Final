import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/models/bus';
import { BusService } from 'src/app/services/bus.service';


@Component({
  selector: 'app-buses-list',
  templateUrl: './buses-list.component.html',
  styleUrls: ['./buses-list.component.css']
})
export class BusesListComponent implements OnInit {
  panelOpenState = false;
  items: Bus[] = [];
  expandedIndex = 0;
  busSeleccionado: Bus = null;

  constructor(
      private busService: BusService
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
}
