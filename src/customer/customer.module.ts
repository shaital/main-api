import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
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
  providers: [],
  controllers: [CustomerController],
})
export class CustomerModule {}
