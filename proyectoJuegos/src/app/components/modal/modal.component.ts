import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Result } from 'src/app/model/juego';
import { DataJuegosService } from 'src/app/services/data-juegos.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  juego: any

  constructor(@Inject(MAT_DIALOG_DATA) private entrada: {dato: Result}, private dataService: DataJuegosService){
    this.DescripcionJuego(entrada.dato.id)
  }

  DescripcionJuego(id: number) {
    this.dataService.traerDescripcion(id)
      .subscribe(data => {
        this.juego = data;
      })      
  }
}
