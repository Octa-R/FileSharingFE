import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileFormComponent } from './file-form/file-form.component';
import { FileListComponent } from './file-list/file-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FileListComponent },
  { path: 'new-file', component: FileFormComponent },
  { path: 'modify/:idx', component: FileFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
