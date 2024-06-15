import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
  selectedFile: File | null = null
  imageUrl: any;
  name = ""
  id: string = "";
  return: boolean = false
  listCategories: any[] = []
  url: any
  listCart: any[] = []
  menu: boolean = false
  num:number = 0
  constructor(private productService: ProductsService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.isGetUrl()
    this.isGetCategories()
    this.isGetCollectioByCat()
  }

  onCategoryChange(event: any) {
    this.id = event
    console.log(event)

  }
  isMenu() {
    this.menu != this.menu
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = event.target.files[0];
    this.uploadImage(file);
  }
  onChangeReturn(event: any) {
    if(true === this.return){
      this.num = 1
    }else{
      this.num = 0
    }
    console.log(this.return, this.num)
  }
  uploadImage(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }
  isGetUrl() {

    this.url = String(this.route.snapshot.paramMap.get("id"))
    this.url = this.titleCaseWord(this.url)
  }
  getEncodedUrl(collectionName: string): string {
    return collectionName.replace(/\s+/g, '-')
  }
  isGetCollectioByCat() {
    this.productService.getCollectionByCat(this.url).subscribe({
      next: data => {
        this.listCart = data.category
      }
    })


  }

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
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

      }
    })
  }

  isCreateCollection() {
    var formData = new FormData();
    formData.append('name', this.name);
    formData.append('categoryId', this.id);
    formData.append('return',String(this.num));

    if (this.selectedFile) {
      formData.append('image', this.selectedFile)
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
