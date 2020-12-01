import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  public mapaVisivel = 1;
  public estimativa: string;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.estimativa = this.calcularHora(48);
  }

  menu() {
    // history.back();
    this.route.navigateByUrl('/menu');
  }

  chamada() {
    this.route.navigateByUrl('/chamada');
  }

  zoom(z: number) {
    this.mapaVisivel += z;
  }

  get verMapa(): number {
    return this.mapaVisivel;
  }

  recentrar() {
    this.mapaVisivel = 1;
  }

  calcularHora(minutos: number): string {
    let data = new Date();
    let retorno;
    let calculo = data.getHours() * 60 + data.getMinutes();
    calculo += minutos;
    let h = Math.floor(calculo / 60);
    let m = calculo - Math.trunc(calculo / 60) * 60;
    if (h > 23) {
      retorno = '00:';
    } else {
      retorno = h.toString() + ':';
    }
    if (m < 10) {
      retorno += '0' + m.toString();
    } else {
      retorno += m.toString();
    }
    return retorno;
  }
}
