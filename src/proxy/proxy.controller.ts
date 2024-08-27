import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProxyService } from './proxy.service';

@Controller('proxy')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

//   @Get(':service/:route')
//   async forwardGet(@Param('service') service: string, @Param('route') route: string) {
//     const url = `http://${service}/${route}`;
//     return this.proxyService.forwardRequest(url, 'GET');
//   }

//   @Post(':service/:route')
//   async forwardPost(
//     @Param('service') service: string,
//     @Param('route') route: string,
//     @Body() body: any,
//   ) {
//     const url = `http://${service}/${route}`;
//     return this.proxyService.forwardRequest(url, 'POST', body);
//   }
  @Get('products')
  getProducts() {
    return this.proxyService.getProducts();
  }

  @Get('products/:id')
  getProduct(@Param('id') id: number) {
    return this.proxyService.getProductById(id);
  }
}
