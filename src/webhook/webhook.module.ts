import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';

@Module({
  imports: [HttpModule],
  controllers: [WebhookController],
})
export class WebhookModule {}
