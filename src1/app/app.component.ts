import { Component } from '@angular/core';
import { Product } from './header/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TOMANA shopping-cart';

  totalItemsParent: number = 0;

  subTotal: number = 0;

  products: Product[] = [
    {
      id: 1,
      name: 'Ornamental plants',
      price: 200000000,
      description: 'Sanh',
      quantity: 1,
      image: 'http://blogcaycanh.vn/uploads/caycanh/1400471345_cay-sanh-5.jpg'
    },
    {
      id: 2,
      name: 'Spare arhat',
      price: 100000000,
      description: 'La hán',
      quantity: 1,
      image:
        'http://blogcaycanh.vn/uploads/caycanh/1387511430_tung-la-han-thong-la-han.jpg'
    }
  ];

  removeProduct(productId: number) {
    const index = this.products.findIndex(product => product.id === productId);
    const nameProduct = this.products[index].name;
    if (index !== -1) {
      this.products.splice(index, 1);
      alert('Đã xóa sản phẩm ' + nameProduct);
    }
  }

  getCountProduct() {
    let totalItem: number = 0;

    for (const product of this.products) {
      totalItem += Number(product.quantity);
    }
      return totalItem;
  }


  hamXuLyKhiBatDauSuKienThayDoiSoLuong(obj: {
    maSanPham: number;
    soLuong: number;
  }) {
    const product = this.products.find(product => product.id === obj.maSanPham);
    product.quantity = obj.soLuong;

    console.log(this.products)
  }

  getsubTotal(){
    let subTotal: number = 0;
    for (const product of this.products) {
      subTotal += Number(product.price*product.quantity);
    }
      return subTotal;
  }
}
