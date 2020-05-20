import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './core/data/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modalEdit/modal.component';
import { ProductCreateComponent } from './product/product-create/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit/product-edit.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ProductResolver } from './product/product-edit/product-edit/product.resolve';

const routes: Routes = [
  { path: 'add-product', component: ProductCreateComponent, },
  { path: 'edit-product', component: ProductEditComponent , resolve:{data: ProductResolver}},
  { path: '', component: ProductComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService,ProductResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
