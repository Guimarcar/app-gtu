import { Passageiro } from './../../models/passageiro.model';
import { Motorista } from './../../models/motorista.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './chamada.component.html',
  styleUrls: ['./chamada.component.css'],
})
export class ChamadaComponent implements OnInit {
  @ViewChild('minhadata') minhaData: ElementRef;

  modal = true;
  presente = true;
  marcou = false;
  isMotorista = false;
  motorista: Motorista;
  vocePassageiro: Passageiro;
  passageiros: Array<Passageiro> = [];
  numPassageiro = -1;
  dayName = new Array('domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado');
  monName = new Array(
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  );
  now = new Date();
  public hoje: string;

  constructor(private route: Router) {
    localStorage.setItem('logado', 'false');
    localStorage.setItem('rodape', 'false');
    this.getMotorista;
    this.getVocePassageiro;
    this.getPassageiros;
    this.presente = !(localStorage.getItem('presente') === 'false');
    this.hoje =
      this.dayName[this.now.getDay()] +
      ', ' +
      this.now.getDate() +
      ' de ' +
      this.monName[this.now.getMonth()];
  }

  ngOnInit(): void {}

  menu() {
    this.route.navigateByUrl('/menu');
  }

  map() {
    console.log(this.minhaData.nativeElement.value);
    console.log(this.hoje);
    this.route.navigateByUrl('/mapa');
  }

  modalPresenca() {
    this.modal = !this.modal;
  }

  marcarPresenca(escolha: boolean) {
    this.presente = escolha;
    localStorage.setItem('presente', escolha.toString());
  }

  get getMotorista(): Motorista {
    if (JSON.parse(localStorage.getItem('meuPerfil')).tipo === 'motorista') {
      this.motorista = JSON.parse(localStorage.getItem('meuPerfil'));
      this.isMotorista = true;
    } else {
      this.motorista = JSON.parse(localStorage.getItem('motorista'));
      this.isMotorista = false;
    }
    return this.motorista;
  }

  get getVocePassageiro(): Passageiro {
    if (JSON.parse(localStorage.getItem('meuPerfil')).tipo !== 'motorista') {
      this.vocePassageiro = JSON.parse(localStorage.getItem('meuPerfil'));
      this.isMotorista = false;
    } else {
      console.log('ERRO: Você passageiro não encontrado!');
    }
    return this.vocePassageiro;
  }

  get getPassageiros(): Array<Passageiro> {
    if (!this.isMotorista) {
      this.passageiros[0] = JSON.parse(localStorage.getItem('p2'));
    } else {
      this.passageiros[0] = JSON.parse(localStorage.getItem('p1'));
      this.passageiros[1] = JSON.parse(localStorage.getItem('p2'));
    }
    return this.passageiros;
  }
}
