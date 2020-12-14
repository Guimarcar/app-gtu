import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  public mapaVisivel = 1;
  public estimativa: string;

  public origin: any;
  public destination: any;
  public destination2: any;
  public lat: Number = -22.402714;
  public lng: Number = -46.969692;
  public travelMode = 'DRIVING';

  public waypoints: any = [{ location: { lat: -22.434279, lng: -46.935533 } }];
  public renderOptions = {
    draggable: true,
  };

  constructor(private route: Router) {
    localStorage.setItem('logado', 'false');
    localStorage.setItem('rodape', 'false');
  }

  ngOnInit(): void {
    this.estimativa = this.calcularHora(48);
    this.getDirection();
  }

  public change(event: any) {
    this.waypoints = event.request.waypoints;
  }

  getDirection() {
    this.origin = { lat: -22.402714, lng: -46.969692 };
    this.destination = { lat: -22.715509, lng: -47.015484 };

    // this.origin = 'Taipei Main Station'
    // this.destination = 'Taiwan Presidential Office'
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
