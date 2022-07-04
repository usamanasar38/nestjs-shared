import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { ApiKeyStrategy } from './strategies/api-key.strategy';

@Module({
  imports: [PassportModule],
  providers: [ConfigService, AuthService, ApiKeyStrategy],
})
export class AuthModule {}
