import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  backgroundUrl = "https://i.postimg.cc/wxkDLzDG/MEN.jpg";
  myArray: string[] = [];
  categoriesList:any[]=[]
  selectedFiles: File[] = [];
  categoryItem:any={}
  name = ""
  ngOnInit() {
    this.isGetAllCategory()
  }
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }
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

  onCreateCategory() {
    var formData = new FormData();
    formData.append('name', this.name);
    if (this.selectedFiles && this.selectedFiles.length) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('images', this.selectedFiles[i]);
      }
    }
    this.categoryService.createCategory(formData).subscribe({
      next: data => {
        console.log(data)
        this.categoryItem = data
      }
    })
  }
  isGetAllCategory() {
    this.categoryService.getAllCategories().subscribe({
      next: data => {
        this.categoriesList = data
        console.log(this.categoriesList)
      }
    })


  }
  isGetCategoryById(id:any){
    console.log(id)
    this.categoryService.getCategoryById(id).subscribe({
      next:data=>{
  
        this.categoryItem = data
        if(this.categoryItem){
          console.log(this.categoryItem)
        }
      }
    })


  }
}
