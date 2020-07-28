import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

var firebaseConfig = {
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
  declarations: [AppComponent, PrimeiroComponent, SegundoComponent, ErroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
