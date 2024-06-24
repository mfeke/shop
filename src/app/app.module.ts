import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { HomeComponent } from './components/user/home/home.component';
import { ShopComponent } from './components/user/shop/shop.component';
import { MainComponent } from './components/user/main/main.component';
import { DepartmentsComponent } from './components/user/departments/departments.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CollectionComponent } from './components/admin/collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ShopComponent,
    MainComponent,
    DepartmentsComponent,
    CollectionComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    QuillModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
