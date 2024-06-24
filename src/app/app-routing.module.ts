import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './components/user/shop/shop.component';
import { MainComponent } from './components/user/main/main.component';
import { HomeComponent } from './components/user/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { CollectionComponent } from './components/admin/collection/collection.component';
import { CategoryComponent } from './components/admin/category/category.component';

const routes: Routes = [
  {path:"account/signin", component:LoginComponent},
  {path:"home", component:ShopComponent},
  {path:"admin/collection", component:CollectionComponent},
  {path:"admin/category", component:CategoryComponent},
  {path:"za/:id", component:MainComponent},
  {path:"za/:catgory/:collection", component:HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
