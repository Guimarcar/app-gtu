import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;
  categoria = '';
  modal = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    localStorage.setItem('logado', 'true');
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

  isMotorista(isMotorista: boolean) {
    if (isMotorista) {
      this.categoria = 'motorista';
    } else {
      this.categoria = 'passageiro';
    }
  }

  abrirModal() {
    this.modal = true;
  }

  fecharModal() {
    this.modal = false;
  }

  get exibeFormulario() {
    return this.categoria;
  }
}
