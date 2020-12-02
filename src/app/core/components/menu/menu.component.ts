import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public modal = false;

  constructor(private route: Router) {
    localStorage.setItem('logado', 'false');
    localStorage.setItem('rodape', 'false');
  }

  ngOnInit(): void {}

  modalGrupo() {
    console.log('MODAL');
    console.log(this.modal);
    this.modal = !this.modal;
  }
}
