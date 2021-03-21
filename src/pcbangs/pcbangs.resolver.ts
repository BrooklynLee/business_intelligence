import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePcbangDto } from './dtos/create-pcbang.dto';
import { Pcbang } from './entities/pcbang.entity';

@Resolver(() => Pcbang)
export class PcbangResolver {
  @Query(() => [Pcbang])
  pcbangs(@Args('isVip') isVip: boolean): Pcbang[] {
    console.log(isVip);
    return [];
  }

  @Mutation((returns) => Boolean)
  createPcbang(@Args() CreatePcbangDto: CreatePcbangDto): boolean {
    return true;
  }
}
