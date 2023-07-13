import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Model } from 'src/app/models/model';
import { Bus } from 'src/app/models/bus';
import { BusDTO } from 'src/app/services/bus.service';
import { BusService } from '../../../services/bus.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModeloService } from 'src/app/services/modelo.service';


@Component({
  selector: 'app-buses-detail',
  templateUrl: './buses-detail.component.html',
  styleUrls: ['./buses-detail.component.css']
})
export class BusesDetailComponent implements OnInit {
  selectedBus: Bus | null = null;
  busForm: FormGroup = this.fb.group({
    patente: ['', Validators.required],
    asientos: ['', Validators.required],
    modeloId: [0, Validators.required]
  })


  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder,
      private busService: BusService,
      private matSnackBar: MatSnackBar,
      private modeloService: ModeloService
    ) {
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      if (id) {
        // @ts-ignore
        this.findBus(Number(id));
      }
    });
  }

  findBus(id: number) {
    this.busService.findOne(id).subscribe(res => {
      if (res) {
        this.selectedBus = new Bus(res.id, res.patente, res.cantidadAsientos, res.modeloId);

        this.busForm.patchValue({
          patente: this.selectedBus.patente,
          asientos: this.selectedBus.cantidadAsientos,
          modeloId: this.selectedBus.modeloId
        })
      }
    }, error => {
      console.log(error);
      this.matSnackBar.open(error, "Cerrar");
      this.router.navigate(['buses', 'list']);
    })
  }
  
  seleccionarBus() {
    alert('Presioné el botón Modificar');
  }
  
  borrarBus() {
    alert('Presioné el botón Borrar')
  }

  findModeloColectivo(colectivo: Bus) {
    this.modeloService.findOne(colectivo.modeloId).subscribe(res => {
      colectivo.modelo = new Model(res.id, res.nombre, res.marca);
    })
  }
  
  guardarCambios() {
  
    const body: BusDTO = {
      id: null,
      patente: this.busForm.get('patente').value,
      cantidadAsientos: this.busForm.get('asientos').value,
      modeloId: this.busForm.get('modeloId').value
    }
  
    if (this.selectedBus && this.selectedBus.id) {
      // LLamar al metodo actualizar
      console.log("Actualizando un colectivo");
  
      body.id = this.selectedBus.id;
  
      this.busService.actualizarBus(body).subscribe(res => {
        this.matSnackBar.open("Se guardaron los cambios del colectivo", "Cerrar");
        this.router.navigate(['buses', 'list']);
      }, error => {
        console.log(error);
        this.matSnackBar.open(error, "Cerrar");
      });
    }
    else {
      this.busService.crearBus(body).subscribe(res => {
        this.matSnackBar.open("Se creo el colectivo correctamente", "Cerrar");
        this.router.navigate(['buses', 'list']);
      }, error => {
        console.log(error);
        this.matSnackBar.open(error, "Cerrar");
      });
    }
    // console.log(this.busForm.value)
  }
  
  volverAtras() {
    // this._location.back();
    this.router.navigate(['buses','list'])
  }

}
