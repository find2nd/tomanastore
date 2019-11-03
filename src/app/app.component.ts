import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, DoCheck {
  products: Product[];
  tongSoLuong: number = 0;
  totalMoney: number = 0;

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.products;
  }

  ngAfterViewInit() {
    console.log('AfterViewInit cua AppComponent');
  }

  ngDoCheck() {
    console.log('DoCheck cua AppComponent');
    let toTalItem = 0;
    let money = 0;
    for (const product of this.products) {
      toTalItem += Number(product.quantity);
      money += Number(product.price) * Number(product.quantity);
    }
    this.tongSoLuong = toTalItem;
    this.totalMoney = money;
  }

  removeProduct(productId: number) {
    const index = this.products.findIndex(product => product.id === productId);
    const nameProduct = this.products[index].name;

    const isRemove = this.productService.removeProduct(productId);

    if (isRemove) {
      alert('Đã xóa sản phẩm ' + nameProduct);
    }
  }

  getCountProduct() {
    let toTalItem: number = 0;

    for (const product of this.products) {
      toTalItem += Number(product.quantity);
    }

    return toTalItem;
  }

  xuLyKhiBatDuocSuKienThayDoiSoLuong(obj: {
    maSanPham: number;
    soLuong: number;
  }) {
    this.productService.changeQuantity(obj.maSanPham, obj.soLuong);
  }
}
