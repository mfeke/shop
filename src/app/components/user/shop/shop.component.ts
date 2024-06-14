import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent {
  backgroundUrl = 'https://i.postimg.cc/TwNxyVgC/ladis.jpg';
  backgroundUrl2 = "https://i.postimg.cc/K8TvTMsN/winter.jpg"
  body: any[] = []

  name = 'Global Trend Collection'
  listGallery: any = []
  url: any
  categoryList: any[] = []
  price = {
    newPrice: 900.00,
    oldPrice: 1200.00,
  }
  listCart = [
    { image: "https://i.postimg.cc/TYVqr9dr/original-2.jpg", name: "Shoes Collection" },
    { image: "https://i.postimg.cc/Nj8THfxb/original-1.jpg", name: " Sports Collection" },
    { image: "https://i.postimg.cc/hvPqCN1m/1008-autumn-winter-2024-drop1-NTM-03-1280x868.jpg", name: "Jackets & Coats Collection" }

  ]
  constructor(private apiService: ApiService, private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.isGetGallery()
    this.productService.getCategories().subscribe({
      next: data => {
        this.body = data
      }
    })
    this.isAllCollection()
  }

  isGetGallery() {
    this.productService.getAllGallerys().subscribe({
      next: data => {
        this.listGallery = data
      }
    })
  }
  isAllCollection() {
    this.productService.getCollection().subscribe({
      next: data => {
        this.categoryList = data
      }
    })
  }
}
