import { Module } from '@nestjs/common';
import { NestjsSharedService } from './nestjs-shared.service';

@Module({
  providers: [NestjsSharedService],
  exports: [NestjsSharedService],
})
export class NestjsSharedModule {}
