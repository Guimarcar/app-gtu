import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  constructor() {
    localStorage.setItem('logado', 'true');
    localStorage.setItem('rodape', 'true');
  }

  ngOnInit(): void {}
}
