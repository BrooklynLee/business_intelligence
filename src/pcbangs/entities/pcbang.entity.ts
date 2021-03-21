import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pcbang {
  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  isVip: boolean;

  @Field(() => String)
  address: string;

  @Field(() => String)
  ownersName: string;
}
