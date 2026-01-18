import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderResository: OrdersRepository){}
  async createOrder(request: CreateOrderDto){
     return this.orderResository.create(request);
  }

  async getOrders(){
    return this.orderResository.find({})
  }
}
