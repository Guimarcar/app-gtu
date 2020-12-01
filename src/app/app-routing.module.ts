import { MapaComponent } from './core/components/mapa/mapa.component';
import { AgradecimentosComponent } from './core/components/agradecimentos/agradecimentos.component';
import { ContatoComponent } from './core/components/contato/contato.component';
import { CadastroComponent } from './core/components/cadastro/cadastro.component';
import { LoginComponent } from './core/components/login/login.component';
import { PrimeiroComponent } from './core/components/primeiro/primeiro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegundoComponent } from './core/components/segundo/segundo.component';
import { ErroComponent } from './core/components/erro/erro.component';
import { SobreComponent } from './core/components/sobre/sobre.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { ChamadaComponent } from './core/components/chamada/chamada.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'chamada', component: ChamadaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'agradecimentos', component: AgradecimentosComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'primeiro', component: PrimeiroComponent },
  { path: 'segundo', component: SegundoComponent },
  { path: '**', component: ErroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
