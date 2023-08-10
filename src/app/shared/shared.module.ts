import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { SimpleLoadingComponent } from './components/simple-loading/simple-loading.component';

@NgModule({
  declarations: [
    LoadingComponent,
    SimpleLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    SimpleLoadingComponent
  ]
})
export class SharedModule { }
