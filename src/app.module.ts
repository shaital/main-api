import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProxyModule } from './proxy/proxy.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    ProxyModule,
    CustomerModule,
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        },
      },
      {
        name: 'CUSTOMER_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        },
      },
    ]),
  ],
})
export class AppModule {}
