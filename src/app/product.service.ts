import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Spare arhat',
      price: 10000000,
      description: 'Tùng la hán',
      quantity: 1,
      image: 'https://i.ytimg.com/vi/dgnxbTlXmUk/maxresdefault.jpg'
    },
    {
      id: 2,
      name: 'Ornamental plants',
      price: 50000000,
      description: 'Sanh',
      quantity: 1,
      image:
        'http://caycanhnamtoan.vn/media/catalog/product/cache/1/image/680x560/9df78eab33525d08d6e5fb8d27136e95/s/a/sanh_tan.jpg'
    }
  ];

  findProductIndex(productId: number): number {
    const index = this.products.findIndex(Product => Product.id === productId);
    return index;
  }

  removeProduct(productId: number): boolean {
    const index = this.findProductIndex(productId);

    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
      }
  }

  changeQuantity(
    maSanPham: number,
    soLuong: number) {
    const product = this.products.find(product => product.id === maSanPham);
    product.quantity = soLuong;
  }

  constructor() {}
}
