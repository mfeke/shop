import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import TomSelect from 'tom-select';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrl: './additem.component.css'
})
export class AdditemComponent {

  editorContent = "";
  dropCat: boolean = false
  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote'],
      [{ 'list': 'bullet' }],
    ]
  };
  imageUrl: any;
  url = ""
  formInputs: string[] = [
    '',
  ];
  number = 0
  title = ""
  price = ""

  description = ''

  category: any = [] 
  selectedFile: File | null = null
  myArray: string[] = []
  tags: any[] = []



  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.isGetCategory()
  }
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader()
        reader.onload = () => {
          this.myArray.push(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  isGetCategory(): void {
    this.productService.getCategories().subscribe({
      next: data => {
        this.category = data
      }
    })
  }

  isAddUrl() {
    this.imageUrl = this.url
  }



}
