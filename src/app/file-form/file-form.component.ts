import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileControllerService, ModelFile } from '../openapi';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css']
})
export class FileFormComponent implements OnInit {
  model : ModelFile = {
    name:""
  }
  idx: number = -1;
  submitted = false;

  constructor(
    private router: Router,
    private service: FileControllerService,
    private route: ActivatedRoute
  ) {
    this.idx = -1;
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.idx=-1){

      this.addItem(this.model);
    }
  }
  async addItem(file: ModelFile) {
    await this.service.fileControllerCreate(file)
  }

  newFile() {
    this.model = {
      name:""
    }
  }
  ngOnInit() {
    const idxParam = this.route.snapshot.paramMap.get('idx');
    idxParam ? (this.idx = +idxParam) : (this.idx = -1);
    if (this.idx === -1) {
      this.model = {
        name:""
      }
    } else {
      this.service
        .fileControllerFind()
        .subscribe((list) => {
          this.model = list[this.idx];
      });
    }
  }
}
