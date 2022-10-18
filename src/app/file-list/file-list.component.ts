import { Component, OnInit } from '@angular/core';
import { FileControllerService, ModelFile } from '../openapi';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})

export class FileListComponent implements OnInit {
  fileList:ModelFile[] = [];
  constructor(private service:FileControllerService) {
    this.service.fileControllerFind()
    .subscribe((list:ModelFile[]) => {
      this.fileList = list;
    });
   }
   getFiles() {
    return this.fileList;
  }
  onEdit(file: ModelFile) {
    if(file.id) {
      this.service.fileControllerUpdateById(file.id)
    }
  }
  onRemove(file: ModelFile) {
    if(file.id){
      this.service.fileControllerDeleteById(file.id)
    }
  }
  ngOnInit(): void {  }
}
