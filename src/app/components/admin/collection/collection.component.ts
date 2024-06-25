import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { CollectionService } from '../../../services/collection.service';

// @Pipe({
//   name: 'capitalize'
// })
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
  myArray: string[] = [];
  collectionList: any[] = []
  selectedFiles: File[] = [];
  name = ""
  mainTag = ""
  nameUrl: any;
  num: number = 0;
  return: boolean = false
  constructor(private route: ActivatedRoute, private collectionService: CollectionService) { }

  ngOnInit() {
    this.nameUrl = this.route.snapshot.paramMap.get('name');
    this.isGetCollectionByCat()
  }
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
  onChangeReturn(event: any) {
    if (true === this.return) {
      this.num = 1
    } else {
      this.num = 0
    }
  }
  onCreateCollection() {
    var formData = new FormData();
    formData.append('name', this.name);
    formData.append("categoryName", this.nameUrl)
    formData.append('mainTag', this.mainTag);
    formData.append('return', String(this.num))
    if (this.selectedFiles && this.selectedFiles.length) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('images', this.selectedFiles[i]);
      }
    }
    this.collectionService.createCollection(formData).subscribe({
      next: data => {
        console.log(data)
      }
    })
  }
  isGetCollectionByCat() {
    if (this.nameUrl) {
      this.collectionService.getCollectionByCat(this.nameUrl).subscribe({
        next: data => {
          console.log(data)
          this.collectionList = data
        }
      })
    }
  }

}
