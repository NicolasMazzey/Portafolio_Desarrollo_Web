import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/model/juego';
import { DataJuegosService } from 'src/app/services/data-juegos.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit{
  juegos :  Result [] = [];
  searchTerms: string = ""
  breakpoint: number;
  pagina: number = 1;

  constructor(private dataService: DataJuegosService, private router: Router){}

  ngOnInit() {
    if (window.innerWidth <= 600) {
      this.breakpoint = 1;
    } else {
      if (window.innerWidth <= 1200) {
        this.breakpoint = 2;
      } else {
        this.breakpoint = 3;
      }
    }
    if (this.router.url == "/juegos"){
      this.CargarJuegos(this.pagina);
    } else {
      if (this.router.url == "/juegos/top10"){
        this.CargarJuegosTop10();
      } else {
        if (this.router.url == "/juegos/playstation") {
          this.CargarJuegosPlataforma("2", this.pagina);  //plataforma de id 2 es playstation para el atributo parent_platforms
        } else {
          if (this.router.url == "/juegos/xbox"){
            this.CargarJuegosPlataforma("3", this.pagina);  //plataforma de id 3 es xbox para el atributo parent_platforms
          } else {
            if (this.router.url == "/juegos/pc"){
              this.CargarJuegosPlataforma("1", this.pagina);  //plataforma de id 1 es pc para el atributo parent_platforms
            }
          }
        } 
      }
    }
  }

  CargarJuegos(pagina: number) {
    this.dataService.traerJuegos(pagina)
      .subscribe(data => {
        this.juegos = [ ...this.juegos, ...data.results];
      })      
  }
  CargarJuegosTop10() {
    this.dataService.traerJuegosTop10()
      .subscribe(data => {
        this.juegos = data.results;
      })      
  }
  CargarJuegosPlataforma(plataforma:string, pagina: number) {
    this.dataService.traerJuegosPlataforma(plataforma, pagina)
      .subscribe(data => {
        this.juegos = [ ...this.juegos, ...data.results];
      })      
  }

  fetchResults(event: string){
    this.searchTerms = event as unknown as string;
  }

  onScroll(event: any) { //Pseudo infinite scroll pero funciona bien, cada vez que llega al fondo trae 40 juegos mas.
    if (event.target.offsetHeight + event.target.scrollTop + 1 >= event.target.scrollHeight) {
      this.pagina = this.pagina+1;
      if (this.router.url == "/juegos"){
        this.CargarJuegos(this.pagina);
      } else {
        if (this.router.url == "/juegos/playstation") {
          this.CargarJuegosPlataforma("2", this.pagina);  //plataforma de id 2 es playstation para el atributo parent_platforms
        } else {
          if (this.router.url == "/juegos/xbox"){
            this.CargarJuegosPlataforma("3", this.pagina);  //plataforma de id 3 es xbox para el atributo parent_platforms
          } else {
            if (this.router.url == "/juegos/pc"){
              this.CargarJuegosPlataforma("1", this.pagina);  //plataforma de id 1 es pc para el atributo parent_platforms
            }
          }
        } 
      }
    }
  }
  
  onResize(event: any) {
    if (event.target.innerWidth <= 600) {
      this.breakpoint = 1;
    } else {
      if (event.target.innerWidth <= 1200) {
        this.breakpoint = 2;
      } else {
        this.breakpoint = 3;
      }
    }
  }
}
