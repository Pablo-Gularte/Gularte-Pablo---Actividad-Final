import { Component, Input } from '@angular/core';

import { Bus } from 'src/app/models/bus';

@Component({
  selector: 'app-buses-detail',
  templateUrl: './buses-detail.component.html',
  styleUrls: ['./buses-detail.component.css']
})
export class BusesDetailComponent {
@Input() busSeleccionado: Bus = null;

}
