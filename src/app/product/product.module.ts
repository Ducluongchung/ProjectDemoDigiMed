import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../modalEdit/modal.component';
import { ProductEditComponent } from './product-edit/product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create/product-create.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
  ],
  // tslint:disable-next-line: max-line-length
  declarations: [ProductComponent, ModalComponent, ProductEditComponent, ProductCreateComponent, ProductEditComponent, ProductCreateComponent],
})
export class ProductModule { }
