import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLoadingComponent } from './components/simple-loading/simple-loading.component';

@NgModule({
  declarations: [
    SimpleLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimpleLoadingComponent
  ]
})
export class SharedModule { }
