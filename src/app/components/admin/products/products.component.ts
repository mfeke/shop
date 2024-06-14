import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  id = ''
  url!: string;
  imageUrl: any;
  selectedFile: any;
  name ='';
listCart: any;

  constructor(private productService: ProductsService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.isGetUrl()
    this.isGetCollection()
  }
  isGetUrl() {

    this.url = String(this.route.snapshot.paramMap.get("id"))
    this.url = this.getEncodedUrl(this.url)
    console.log(this.url)
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = event.target.files[0];
    this.uploadImage(file);
  }

  uploadImage(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  getEncodedUrl(collectionName: string): string {
    return collectionName.replace(/-/g, ' ');
  }
  isEditCategory() {
    var formData = new FormData();

    formData.append('name', this.name);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);

    }
    
  this.productService.updateCollectionById(this.id,formData).subscribe({
    next:data=>{
      console.log(data)
      if(data){
        window.location.reload();
      }
    }
  })



  }
  isGetCollection() {
    this.productService.getCollectionByName(this.url).subscribe({
      next: data => {
        console.log(data[0])
        this.id = data[0]._id
        this.listCart = data[0].tags


      }
    })
  }

}
