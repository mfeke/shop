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
  backgroundUrl = 'https://i.postimg.cc/tgLhRLr5/118114948-1535310586638576-6177678515304372142-n.jpg';
  images = ['https://i.postimg.cc/Pf1FtmHn/3107-3x2-1-spring-summer-23-collection-1280x853.jpg',
    "https://i.postimg.cc/tCN6Cg7g/cq5dam-web-976-603-8-306904.webp"]
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

    // this.productService.getCategories().subscribe({
    //   next: data => {
    //     // this.body = data
    //     // this.home = data[4]
    //     // this.most = data[5]

    //   },
      
    // })
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
