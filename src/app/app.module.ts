import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './core/components/primeiro/primeiro.component';
import { SegundoComponent } from './core/components/segundo/segundo.component';
import { ErroComponent } from './core/components/erro/erro.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { LoginComponent } from './core/components/login/login.component';
import { CadastroComponent } from './core/components/cadastro/cadastro.component';
import { SobreComponent } from './core/components/sobre/sobre.component';
import { ContatoComponent } from './core/components/contato/contato.component';
import { AgradecimentosComponent } from './core/components/agradecimentos/agradecimentos.component';
import { MapaComponent } from './core/components/mapa/mapa.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { ChamadaComponent } from './core/components/chamada/chamada.component';
import { PerfilComponent } from './core/components/perfil/perfil.component';
import { CloseComponent } from './core/components/close/close.component';
import { GooglemapsComponent } from './core/components/googlemaps/googlemaps.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAS_PvmDvuLhO9tw2Bqy-fHCaP_Cp5icEA',
  authDomain: 'app-gtu.firebaseapp.com',
  databaseURL: 'https://app-gtu.firebaseio.com',
  projectId: 'app-gtu',
  storageBucket: 'app-gtu.appspot.com',
  messagingSenderId: '740159935232',
  appId: '1:740159935232:web:0340c594f731671f7919e5',
  measurementId: 'G-1HS56VFZ94',
};

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    ErroComponent,
    LoginComponent,
    CadastroComponent,
    SobreComponent,
    ContatoComponent,
    AgradecimentosComponent,
    MapaComponent,
    MenuComponent,
    ChamadaComponent,
    PerfilComponent,
    CloseComponent,
    GooglemapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaI9UsKZW3HaFSJGHl_Qf2sMeK1zqmHqw',
    }),
    AgmDirectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
