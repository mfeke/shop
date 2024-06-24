import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './components/user/shop/shop.component';
import { MainComponent } from './components/user/main/main.component';
import { HomeComponent } from './components/user/home/home.component';
import { LoginComponent } from './components/user/login/login.component';

const routes: Routes = [
  {path:"account/signin", component:LoginComponent},
  {path:"home", component:ShopComponent},
  {path:"za/:id", component:MainComponent},
  {path:"za/:catgory/:collection", component:HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
