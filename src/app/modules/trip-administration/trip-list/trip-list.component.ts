import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Trip} from "../../../models/trip";
import { Person } from 'src/app/models/person';
import {TripService} from "../../../services/trip.service";
import {ModeloService} from "../../../services/modelo.service";
import {BusService} from "../../../services/bus.service";
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-trip.ts-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit{

  listaPersonaId: number[] = [];
  listaPasajeros: string[] = [];
  displayedColumns = ['id', 'origen', 'destino', 'fechaLlegada', 'fechaSalida', 'colectivo', 'acciones'];
  dataSource = [
    new Trip(1, 'Viedma', 'Patagones', '2023-06-29', '2023-06-29', 1)
  ];

  constructor(private tripService: TripService,
              private busService: BusService,
              private personService: PersonService,
              private router: Router) {
  }

  ngOnInit() {
    this.tripService.findAll().subscribe(res => {
      this.dataSource = res.body.map(res => {
        console.log(res);
        const trip = new Trip(res.id, res.lugarSalida, res.lugarDestino, res.fechaLlegada, res.fechaSalida, res.idColectivo, res.personaId);
        this.loadColectivo(trip);
        this.listaPersonaId = res.personaId;
        return trip;
      });
    })
  }

  loadColectivo(trip: Trip) {
    this.busService.findOne(trip.idColectivo).subscribe(res => {
      trip.colectivo = res;
    })
  }

  crearPersona() {
    this.router.navigate(['trips','create']);
  }

  editarTrip(trip) {
    this.router.navigate(['trips', 'detail', trip.id]);
  }

  verPasajeros() {
    let txt: string = '';
    console.log(this.listaPasajeros);
    for(let p of this.listaPasajeros) {
      alert(p);
      console.log(p);
    }
    alert(txt);
  }

}
