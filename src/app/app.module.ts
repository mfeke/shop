import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/admin/signin/signin.component';
import { SignupComponent } from './components/admin/signup/signup.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { MyproductsComponent } from './components/admin/myproducts/myproducts.component';
import { AdditemComponent } from './components/admin/additem/additem.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { HomeComponent } from './components/user/home/home.component';
import { ShopComponent } from './components/user/shop/shop.component';
import { MainComponent } from './components/user/main/main.component';
import { DepartmentsComponent } from './components/user/departments/departments.component';
import { CollectionComponent } from './components/admin/collection/collection.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductsComponent } from './components/admin/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    RegisterComponent,
    LoginComponent,
    MyproductsComponent,
    AdditemComponent,
    HomeComponent,
    NavbarComponent,
    ShopComponent,
    MainComponent,
    DepartmentsComponent,
    CollectionComponent,
    ProductsComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
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
