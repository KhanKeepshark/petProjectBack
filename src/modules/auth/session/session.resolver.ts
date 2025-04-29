import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { SessionService } from './session.service';
import { UserModel } from '../account/models/user.model';
import { LoginInput } from './inputs/login.inputs';
import { GqlContext } from '@/src/shared/types/gql-context.types';

@Resolver('Session')
export class SessionResolver {
  constructor(private readonly sessionService: SessionService) {}

  @Mutation(() => UserModel, { name: 'loginUser' })
  public async login(
    @Context() { req }: GqlContext,
    @Args('data') input: LoginInput,
  ) {
    return await this.sessionService.login(req, input);
  }

  @Mutation(() => Boolean, { name: 'logoutUser' })
  public async logout(@Context() { req }: GqlContext) {
    return await this.sessionService.logout(req);
  }
}
