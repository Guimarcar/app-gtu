import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/shared/services/auth/user-auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css'],
})
export class PrimeiroComponent implements OnInit {
  private isPassword = true;
  public eye = 'visibility';

  formulario: FormGroup;

  constructor(public user: UserAuthService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null],
      senha: [null],
    });
  }

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
