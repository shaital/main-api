import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProxyService {
  constructor(@Inject('PRODUCT_SERVICE') private productClient: ClientProxy) {}

  async getProducts() {
    return this.productClient.send({ cmd: 'get-products' }, {});
  }

  async getProductById(id: number) {
    return this.productClient.send({ cmd: 'get-product' }, id);
  }
}
