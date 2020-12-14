import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private isPassword = true;
  public loginInvalido = false;
  public eye = 'visibility';
  private logado = 0;
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: Router) {
    this.limparCache();
    localStorage.setItem('logado', 'false');
    localStorage.setItem('cabecalho', 'false');
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
    this.logado = this.logar();
    if (this.logado === 0) {
      this.loginInvalido = true;
    } else {
      localStorage.setItem('token', 'true');
    }
    // this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).subscribe(
    //   (dados) => {
    //     console.log(dados);
    //     // reset do form
    //     this.formulario.reset();
    //   },
    //   (error: any) => console.error(error)
    // );
  }

  private logar(): number {
    if (
      this.formulario.value['email'] === 'vinicius.souza836@al.faj.br' &&
      this.formulario.value['senha'] === '123456'
    ) {
      localStorage.setItem('meuPerfil', this.primeiroUsuario);
      localStorage.setItem('p1', this.segundoUsuario);
      localStorage.setItem('p2', this.terceiroUsuario);
      this.route.navigate(['chamada']);
      return 1; // MOTORISTA
    } else if (
      this.formulario.value['email'] === 'guilherme.carneiro962@al.faj.br' &&
      this.formulario.value['senha'] === '123456'
    ) {
      localStorage.setItem('meuPerfil', this.segundoUsuario);
      localStorage.setItem('motorista', this.primeiroUsuario);
      localStorage.setItem('p2', this.terceiroUsuario);
      this.route.navigate(['chamada']);
      return 2; // PASSAGEIRO 1
    } else if (
      this.formulario.value['email'] === 'leonardo.catini881@al.faj.br' &&
      this.formulario.value['senha'] === '123456'
    ) {
      localStorage.setItem('meuPerfil', this.terceiroUsuario);
      localStorage.setItem('motorista', this.primeiroUsuario);
      localStorage.setItem('p2', this.segundoUsuario);
      this.route.navigate(['chamada']);
      return 3; // PASSAGEIRO 2
    } else {
      return 0; // NAO LOGADO
    }
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

  limparCache() {
    localStorage.removeItem('meuPerfil');
    localStorage.removeItem('p1');
    localStorage.removeItem('p2');
  }

  get primeiroUsuario(): string {
    return '{"tipo": "motorista","id": 1,"nome": "Vinicius de Cassio","endereco": {"estado": "SP","cidade": "Mogi Mirim","bairro": "Jardim Scomparim","rua": "Av. Pedro Botesi","numero": "2555","complemento": ""},"destino": "Rod. Campinas-Mogi Mirim, s/nº - km 127 - Tanquinho Velho, Jaguariúna - SP, 13820-000","contatoA": "(19) 99916-1361","contatoB": "","grupo": 1}';
  }

  get segundoUsuario(): string {
    return '{"tipo": "passageiro","id": 1,"nome": "Guilherme Carneiro","endereco": {"estado": "SP","cidade": "Mogi Mirim","bairro": "Jardim Scomparim","rua": "Av. Pedro Botesi","numero": "2555","complemento": ""},"contatoA": "(19) 98178-2192","contatoB": "","grupo": 1}';
  }

  get terceiroUsuario(): string {
    return '{"tipo": "passageiro","id": 2,"nome": "Leonardo Catini","endereco": {"estado": "SP","cidade": "Mogi Mirim","bairro": "Chácaras Sol Nascente","rua": "Rua Tubinambá","numero": "87","complemento": ""},"contatoA": "(19) 99686-9410","contatoB": "","grupo": 1}';
  }
}
