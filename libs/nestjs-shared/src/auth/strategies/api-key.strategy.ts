import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { AuthService } from '../auth.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy) {
  constructor(private authService: AuthService) {
    super(
      { header: 'Authorization', prefix: 'Bearer ' },
      true,
      (accessToken: string, done: (arg0: boolean) => any) => {
        const checkKey = !!this.authService.validateAccessToken(accessToken);
        return done(checkKey);
      },
    );
  }
}
