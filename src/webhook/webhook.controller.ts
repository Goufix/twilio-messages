/* eslint-disable @typescript-eslint/no-var-requires */
import { HttpService } from '@nestjs/axios';
import { Controller, Post, Req } from '@nestjs/common';
const twilio = require('twilio');

const accountSid = 'AC4d5d7eba5544a0b472dbe014d1096b5b';
const authToken = 'fd2e2b75c7f9a60d989375052908e990';

const client = new twilio(accountSid, authToken);

@Controller('webhook')
export class WebhookController {
  constructor(private readonly HttpService: HttpService) {}

  @Post('')
  async processMessage(@Req() request) {
    console.log(request.body);

    client.messages
      .create({
        body: 'salve',
        from: 'whatsapp:+14155238886',
        to: request.body.From,
      })
      .then((message) => console.log(message))
      .done();

    console.log('aa');

    return 'Oi,bb';
  }
}
