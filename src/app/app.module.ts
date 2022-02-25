import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { InputNumberModule } from 'primeng/inputnumber';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HomeService } from './services/home-service.service';
import { PersonalizedRescueComponent } from './pages/personalized-rescue/personalized-rescue.component';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

const components = [
  AppComponent,
  HomeComponent,
  PersonalizedRescueComponent
];

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  TableModule,
  SliderModule,
  DialogModule,
  ConfirmDialogModule,
  MultiSelectModule,
  HttpClientModule,
  DropdownModule,
  DividerModule,
  CardModule,
  FieldsetModule,
  MessagesModule,
  MessageModule,
  FormsModule,
  ButtonModule,
  InputNumberModule,
  ContextMenuModule,
]

@NgModule({
  declarations: [...components],
  imports: [
    ...modules,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [HomeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
