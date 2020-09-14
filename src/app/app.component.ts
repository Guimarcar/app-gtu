import { Component, OnChanges, OnInit, SimpleChanges, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-gtu';

  constructor() {}

  ngOnInit(): void {}

  voltar() {
    history.back();
  }

  get logado(): boolean {
    return localStorage.getItem('logado') === 'true' ? true : false;
  }

  get footer(): boolean {
    return localStorage.getItem('rodape') === 'true' ? true : false;
  }
}
