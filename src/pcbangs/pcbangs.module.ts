import { Module } from '@nestjs/common';
import { PcbangResolver } from './pcbangs.resolver';

@Module({
  providers: [PcbangResolver],
})
export class PcbangsModule {}
