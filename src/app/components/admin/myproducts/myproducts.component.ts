import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrl: './myproducts.component.css'
})
export class MyproductsComponent {
  selectedFile: File | null = null
  imageUrl: any;
  name = ""
  id: string = "";
  body: any[] = []
  listCategories: any[] = []
  backgroundUrl = 'https://i.postimg.cc/VLQ3VYVd/kids-B.jpg';
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.isGetCategories()

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

  isCreateCategory() {
    var formData = new FormData();

    formData.append('name', this.name);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);

    }
    this.productService.createCategory(formData).subscribe({
      next: data => {
        if (data) {
          window.location.reload()
        }
      }
    })

  }
  isGetCategories() {
    this.productService.getCategories().subscribe({
      next: data => {
        this.listCategories = data
        console.log(this.listCategories)

      }
    })
  }

  isCreateCollection() {
    var formData = new FormData();

    formData.append('name', this.name);
    formData.append('categoryId', this.id);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);

    }
    this.productService.createCollection(formData).subscribe({
      next: data => {
        if (data) {
          window.location.reload()
        }
      }
    })

  }
  isCreateCover() {
    var formData = new FormData();

    formData.append('name', this.name);
    formData.append('categoryId', this.id);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);

    }
    this.productService.createCover(formData).subscribe({
      next: data => {
        if (data) {
          window.location.reload()
        }
      }
    })

  }

}
