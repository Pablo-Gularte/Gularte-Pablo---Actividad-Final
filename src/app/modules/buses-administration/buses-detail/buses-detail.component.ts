import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Bus } from 'src/app/models/bus';

@Component({
  selector: 'app-buses-detail',
  templateUrl: './buses-detail.component.html',
  styleUrls: ['./buses-detail.component.css']
})
export class BusesDetailComponent implements OnInit {
@Input() busSeleccionado: Bus = null;
@Input() crearNuevo: boolean = false;

constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = params.get("id");
    if (id) {
      // @ts-ignore
      alert("El id que estoy editando es: " + id);
    }
  });
}

seleccionarBus() {
  alert('Presioné el botón Modificar');
}

borrarBus() {
  alert('Presioné el botón Borrar')
}

volverAtras() {
  // this._location.back();
  this.router.navigate(['buses','list'])
}

}
