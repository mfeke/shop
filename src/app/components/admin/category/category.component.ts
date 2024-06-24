import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  backgroundUrl = "https://i.postimg.cc/wxkDLzDG/MEN.jpg";
  myArray: string[] = [];
  selectedFiles: File[] = [];
  name = ""
  ngOnInit() {

  }
  constructor(private productService: ProductsService, private route: ActivatedRoute) { }
  isFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.selectedFiles.push(file)
        const reader = new FileReader()
        reader.onload = () => {
          this.myArray.push(reader.result as string);

        };
        reader.readAsDataURL(file);
      }
    }
  }
  
  onCreateCollection(){
    var formData = new FormData();
    formData.append('name', this.name);
    if (this.selectedFiles && this.selectedFiles.length) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('images', this.selectedFiles[i]);
      }
    }
    this.productService.createCategory(formData).subscribe({
      next:data=>{
        console.log(data)
      }
    })
  }
}
