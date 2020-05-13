import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../core/data/data.service'
import { Product } from './product'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: any;
  public action: string;
  public pageIndex: number = 1;
  public pageSize: number = 1;
  public keyword: string = '';
  public pageCount: number;
  public numbers: any;
  public model = new Product();
  public modelDetail = new Product();
  public pageActive: number = 1;

  constructor(private _dataService: DataService) { }
  ngOnInit() {
    this.loadData();
 }

  loadData() {
    this._dataService.get('product?KeyWord' + this.keyword + '&pageIndex=' + this.pageIndex + '&pageSize='
      + this.pageSize).subscribe((res: any) => {
        console.log(res);
        console.log(this.pageActive);
      this.product = res["items"],
        this.pageCount = res.pageCount,
        this.numbers = new Array(this.pageCount);
    });
  }

  create() {
    this._dataService.post('product', JSON.stringify(this.model)).subscribe((response: any) => {
      this.loadData();
      this.model = new Product();
    }, error => this._dataService.handleError(error));
  }

  update() {
    this._dataService.put('product', JSON.stringify(this.modelDetail)).subscribe((response: any) => {
      this.model.id = undefined;
      this.loadData();
      // tslint:disable-next-line: no-unused-expression
    }, error => this._dataService.handleError(error));
  }

  delete(productId: any) {
    this._dataService.delete('product', 'productId', productId).subscribe((response: any) => {
      this.loadData();
    }, error => this._dataService.handleError(error));
  }

  loadDetail(productId: any) {
    this._dataService.get(`Product/detail?productId=${productId}`).subscribe((response: any) => {
      this.modelDetail = response;
    }, error => this._dataService.handleError(error));
  }

  changePage(page: any) {
    this.pageIndex = page;
    this.pageActive = this.pageIndex;
    this._dataService.get('product?KeyWord' + this.keyword + '&pageIndex=' + this.pageIndex + '&pageSize='
      + this.pageSize).subscribe((res: any) => {
        this.loadData();
      });
  }

  pageNext() {
    this.pageIndex++;
    this._dataService.get('product?KeyWord' + this.keyword + '&pageIndex=' + this.pageIndex + '&pageSize='
      + this.pageSize).subscribe((res: any) => {
        this.loadData();
      });
  }

  pagePrevious() {
    this.pageIndex--;
    this._dataService.get('product?KeyWord' + this.keyword + '&pageIndex=' + this.pageIndex + '&pageSize='
      + this.pageSize).subscribe((res: any) => {
        this.loadData();
      });
  }


}
