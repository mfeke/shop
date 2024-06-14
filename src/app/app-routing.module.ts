import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/admin/signin/signin.component';
import { SignupComponent } from './components/admin/signup/signup.component';
import { MyproductsComponent } from './components/admin/myproducts/myproducts.component';
import { AdditemComponent } from './components/admin/additem/additem.component';
import { ShopComponent } from './components/user/shop/shop.component';
import { MainComponent } from './components/user/main/main.component';
import { HomeComponent } from './components/user/home/home.component';
import { CollectionComponent } from './components/admin/collection/collection.component';
import { ProductsComponent } from './components/admin/products/products.component';

const routes: Routes = [
  {path:"account/signin", component:SigninComponent},
  {path:"account/signup", component:SignupComponent},
  {path:"myproducts", component:MyproductsComponent},
  {path:"myproducts/:id", component:CollectionComponent},
  {path:"myproducts/:name/:id", component:ProductsComponent},

  {path:"home", component:ShopComponent},
  {path:"za/:id", component:MainComponent},
  {path:"za/:catgory/:collection", component:HomeComponent},

  {path:"add", component:AdditemComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
