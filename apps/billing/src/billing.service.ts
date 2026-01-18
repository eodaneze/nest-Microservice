import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingService {
  getHello(): string {
    return 'Hello World! this is  the billing service';
  }
}
