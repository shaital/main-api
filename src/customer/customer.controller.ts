import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('customer')
export class CustomerController {
  constructor(
    @Inject('CUSTOMER_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post('add')
  addCustomer(
    @Body('name') name: string,
    @Body('products') products: string[],
  ): Observable<any> {
    return this.client.send({ cmd: 'add_customer' }, { name, products });
  }

  @Get('list')
  listCustomers(): Observable<any> {
    return this.client.send({ cmd: 'list_customers' }, {});
  }

  @Get(':id/products')
  listCustomerProducts(@Param('id') id: number): Observable<any> {
    return this.client.send({ cmd: 'list_customer_products' }, { id });
  }
}
