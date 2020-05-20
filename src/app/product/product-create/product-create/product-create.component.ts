import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/data/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  Title = 'Create-Product';
  data: any;
  constructor(private _dataService: DataService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.data;
    console.log(this.data);
  }
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: member-ordering
  formCreateProduct = this.fb.group({
    id : [''],
    name: ['', Validators.required],
    description: [''],
    seoAlias: ['', Validators.required],
    price: ['', Validators.required]

  });

  saveChange() {
    this._dataService.post('product', JSON.stringify(this.formCreateProduct.value)).subscribe(() => {
      this.router.navigate(['']);
    }, error => this._dataService.handleError(error));
  }


}
