import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../header/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  @Input() Product: Product[];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() suKienThayDoiSoLuong = new EventEmitter();

  removeProduct(producID: number) {
    this.onRemoveProduct.emit(producID);
  }

  changeQuantity(inputElement: HTMLInputElement, productID: number) {
    this.suKienThayDoiSoLuong.emit(
      {maSanPham: productID,
        soLuong: inputElement.value});
  }
}
