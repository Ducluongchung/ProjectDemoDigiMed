import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Product } from '../product/product';
import { DataService } from '../core/data/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() model: any;
  @Output() productEditEvent = new EventEmitter();
  constructor(private _dataService: DataService, private fb: FormBuilder) { }

  ngOnInit() {
  }
  // tslint:disable-next-line: member-ordering
  productForm = this.fb.group({
    id : [''],
    name: [''],
    description: [''],
    seoAlias: [''],
    price: ['']

  });


  saveChange() {
    if (this.model.id !== undefined) {
      console.log(this.productForm.value);
      this._dataService.put('product', JSON.stringify(this.productForm.value)).subscribe(() => {
        this.model = new Product();
        this.productEditEvent.emit();
      }, error => this._dataService.handleError(error));
    }

  }




}
