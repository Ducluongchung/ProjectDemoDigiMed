import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/data/data.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  public model: any;
  Title = 'Edit-Product';
  id: any;
  formEditProduct: FormGroup;
  data: any;
  private _router: Router;


  constructor(private _dataService: DataService, private fb: FormBuilder,
    private router: Router, private activatedRoute: ActivatedRoute) {
    this._router = router;
  }



  ngOnInit() {
    this.buildForm();
    this.data = this.activatedRoute.snapshot.data;
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = this.data.data;
    this.loadDetail(this.id);

  }

  buildForm() {
    this.formEditProduct = this.fb.group({
      id : [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      seoAlias: ['', Validators.required],
      price: ['', Validators.required]

    });
 }

  saveChange() {
    this._dataService.put('product', JSON.stringify(this.formEditProduct.value)).subscribe(() => {
      this._router.navigate(['']);
    }, error => this._dataService.handleError(error));
  }

  loadDetail(productId: any) {
    this._dataService.get(`Product/${productId}`).subscribe((response: any) => {
      this.model = response;
      this.formEditProduct.patchValue(this.model);
    }, error => this._dataService.handleError(error));
  }
}
