import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css'],
})
export class ErroComponent implements OnInit {
  constructor(private route: Router) {
    if (localStorage.getItem('token')) {
      this.route.navigate(['menu']);
    } else {
      this.route.navigate(['login']);
    }
  }

  ngOnInit(): void {}
}
