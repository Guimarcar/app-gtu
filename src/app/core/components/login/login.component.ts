import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private isPassword = true;
  public eye = 'visibility';
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    localStorage.setItem('logado', 'false');
    localStorage.setItem('rodape', 'false');
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null],
      senha: [null],
    });
  }

  // enviarDados() {
  //   const dadosFormulario = this.formulario.value;

  //   alert(`Entrou com o usuário ${this.formulario.value}`);
  //   console.log(this.formulario);

  //   this.formulario.reset();
  // }

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
