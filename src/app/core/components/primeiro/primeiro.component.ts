import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/shared/services/auth/user-auth.service';

@Component({
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css'],
})
export class PrimeiroComponent implements OnInit {
  private isPassword = true;
  public eye = 'visibility';

  constructor(public user: UserAuthService) {}

  ngOnInit(): void {}

  alternaTipo() {
    if (this.isPassword) {
      this.eye = 'visibility_off';
      this.isPassword = false;
    } else {
      this.eye = 'visibility';
      this.isPassword = true;
    }
  }

  get TipoCampo(): string {
    if (this.isPassword) {
      return 'password';
    } else {
      return 'text';
    }
  }
}
