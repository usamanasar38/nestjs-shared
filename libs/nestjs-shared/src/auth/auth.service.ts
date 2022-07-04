import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly configSerivce: ConfigService) {}

  validateAccessToken(accessToken: string) {
    return this.configSerivce.get('application.accessToken') === accessToken;
  }
}
