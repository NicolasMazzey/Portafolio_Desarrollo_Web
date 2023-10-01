import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Result } from 'src/app/model/juego';

@Component({
  selector: 'app-carta-juego',
  templateUrl: './carta-juego.component.html',
  styleUrls: ['./carta-juego.component.css']
})


export class CartaJuegoComponent {
  @Input() public datos: Result
  @Input() nombre: string
  @Input() imagen: string

  constructor(public dialog: MatDialog){
  }

  openDialog(dato: Result) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { dato }
    });
  }
}
