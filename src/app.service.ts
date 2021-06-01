import { Injectable } from '@nestjs/common';
import { User, UserService } from './generated/sleeper-api/index';

@Injectable()
export class AppService {
  constructor(private userService: UserService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUser(): Promise<User> {
    const response = await this.userService
      .userUsernameGet('blastdan')
      .toPromise();

    return response.data;
  }
}
