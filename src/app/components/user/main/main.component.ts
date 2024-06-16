import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  promoList:any [] = []
  listCart: any = []
  listGallery: any = []
  wordnot ="New Arrivals"
  word = "Bestsellers"
  price = {
    newPrice: 900.00,
    oldPrice: 1200.00,
  }
  products = [
    { image: "https://i.postimg.cc/g2w82FSk/original-9.jpg", name: "White Oversized Fit Graphic Print T-Shirt ", price: 2300, color: ["red", "pink", "blue"] },
    { image: "https://i.postimg.cc/15qX4Ghw/original-11.jpg", name: "Pile hoodie - beige", price: 2300, color: ["red", "pink", "blue"] },
    { image: "https://i.postimg.cc/6q0JZZyt/original.jpg", name: "Padded bomber jacket ", price: 2300, color: ["red", "pink", "blue"] },
    { image: "https://i.postimg.cc/g2w82FSk/original-9.jpg", name: "White Oversized Fit Graphic Print T-Shirt ", price: 2300, color: ["red", "pink", "blue"] },
    { image: "https://i.postimg.cc/g2w82FSk/original-9.jpg", name: "White Oversized Fit Graphic Print T-Shirt ", price: 2300, color: ["red", "pink", "blue"] },

  ]
  body: any;
  params: any;
  constructor(private apiService: ApiService, private productService: ProductsService, private route: ActivatedRoute) { }
  url: any
  ngOnInit() {
    this.isGetUrl()
    this.isGetCollectioByCat()
    this.isGetPromoByCat()

  }

  isGetUrl() {

    this.url = String(this.route.snapshot.paramMap.get("id"))
    this.url = this.titleCaseWord(this.url)
    this.params = String(this.route.snapshot.paramMap.get("id"))
  }
  isGetCollectioByCat() {

    this.productService.getCollectionByCat(this.url).subscribe({
      next: data => {
        this.listCart = data.category
        this.body = data.cover
        this.listGallery = data.gallery
      }
    })


  }
  isGetPromoByCat() {

    this.productService.getPromoByCatName(this.url).subscribe({
      next: data => {
        this.promoList = data
      }
    })


  }
  getEncodedUrl(collectionName: string): string {
    return collectionName.replace(/\s+/g, '-')
  }
  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

}
