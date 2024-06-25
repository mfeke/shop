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
  promoList: any[] = []
  listCart: any = []
  listGallery: any = []
  listCategory: any[] = []
  wordnot = "New Arrivals"
  word = "Bestsellers"
  price = {
    newPrice: 900.00,
    oldPrice: 1200.00,
  }
  name = 'Global Trend Collection '
  namel = "Most Wanted"


  catName: any;
  body: any;
  params: any;
  constructor(private apiService: ApiService, private productService: ProductsService, private route: ActivatedRoute) { }
  url: any
  ngOnInit() {
    this.isGetUrl()
    this.isGetCollectioByCat()
    this.isGetPromoByCat()
    // this.isGetCategory()

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
  // isGetCategory() {
  //   this.productService.getCategories().subscribe({
  //     next: data => {
  //       console.log(data)
  //       this.listCategory = data
  //       this.catName = data
  //     }
  //   })
  // }
  getEncodedUrl(collectionName: string): string {
    return collectionName.replace(/\s+/g, '-')
  }
  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

}
