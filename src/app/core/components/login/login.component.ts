import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private isPassword = true;
  public eye = 'visibility';
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    localStorage.setItem('logado', 'false');
    localStorage.setItem('rodape', 'false');
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      // Regex email
      // /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    console.log(this.formulario);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).subscribe(
      (dados) => {
        console.log(dados);
        // reset do form
        this.formulario.reset();
      },
      (error: any) => console.error(error)
    );
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
