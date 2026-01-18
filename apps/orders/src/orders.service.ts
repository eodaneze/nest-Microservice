import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersRepository } from './orders.repository';
import { BILLING_SERVICE } from './constants/service';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  constructor(
    private readonly orderResository: OrdersRepository, 
    @Inject(BILLING_SERVICE) private billingClient:ClientProxy
  ){}
  async createOrder(request: CreateOrderDto){
     return this.orderResository.create(request);
  }

  async getOrders(){
    return this.orderResository.find({})
  }
}
