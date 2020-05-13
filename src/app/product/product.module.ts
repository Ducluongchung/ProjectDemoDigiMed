import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [ProductComponent],
})
export class ProductModule { }
