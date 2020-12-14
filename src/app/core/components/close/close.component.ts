import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.css'],
})
export class CloseComponent implements OnInit {
  constructor(private route: Router) {
    localStorage.setItem('logado', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('presente');
    localStorage.removeItem('motorista');
    localStorage.removeItem('meuPerfil');
    localStorage.removeItem('p2');
    this.route.navigate(['/']);
  }

  ngOnInit(): void {}
}
