import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  price = {
    newPrice: 900.00,
    oldPrice: 1200.00,
  }
  url!: string;

  main:any[] =[];
 
  constructor(private productService: ProductsService,private route: ActivatedRoute) { }


  ngOnInit(){
    this.isGetUrl()
    this.isGetCollection()
  }

  isGetUrl() {

    this.url = String(this.route.snapshot.paramMap.get("collection"))
    this.url = this.getEncodedUrl(this.url)
    
    console.log(this.url)
  }
  isGetCollection() {
    this.productService.getCollectionByName(this.url).subscribe({
      next: data => {
       this.main = data

       console.log(this.main)
      }
    })
  }

  getEncodedUrl(collectionName: string): string {
    return collectionName.replace(/-/g, ' ');
  }
}
