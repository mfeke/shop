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
  home: any = {}
  most: any = {}

  constructor(private apiService: ApiService, private productService: ProductsService, private route: ActivatedRoute) { }
  ngOnInit() {

    this.productService.getCategories().subscribe({
      next: data => {
        this.body = data
        this.home = data[4]
        this.most = data[5]

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
        console.log(data)
      }
    })
  }
}
