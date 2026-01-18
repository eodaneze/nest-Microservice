import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';
import { RmqService } from '@app/common/rmq/rmq.service';
import { application } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(BillingModule);

  const rmqService = app.get<RmqService>(RmqService);

  app.connectMicroservice(rmqService.getOptions('BILLING'));
  // await app.listen(process.env.port ?? 3000);
  await app.startAllMicroservices();
}
bootstrap();
