import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class HomeResolver {
  @Query(() => String)
  hello() {
    return 'Hello, world!';
  }

  @Query(() => String)
  ola() {
    return 'ola mundo';
  }
}