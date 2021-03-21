import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PcbangsModule } from './pcbangs/pcbangs.module';

@Module({
  imports: [GraphQLModule.forRoot({ autoSchemaFile: true }), PcbangsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
