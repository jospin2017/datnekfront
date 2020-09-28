import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangageManagerComponent } from './pages/langage-manager/langage-manager.component';
import { AddLangageComponent } from './pages/add-langage/add-langage.component';
import { ListLangageComponent } from './pages/list-langage/list-langage.component';
import { HeaderLangageComponent } from './pages/header-langage/header-langage.component';
import { CountLangageAddComponent } from './pages/count-langage-add/count-langage-add.component';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LangageManagerComponent,
    AddLangageComponent,
    ListLangageComponent,
    HeaderLangageComponent,
    CountLangageAddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
