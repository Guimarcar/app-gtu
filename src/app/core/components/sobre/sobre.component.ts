import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent implements OnInit {
  constructor(private route: Router) {
    // if (!localStorage.getItem('token')) {
    //   this.route.navigate(['login']);
    // }
    localStorage.setItem('logado', 'true');
    localStorage.setItem('rodape', 'false');
  }

  ngOnInit(): void {}

  voltar() {
    history.back();
  }
}
