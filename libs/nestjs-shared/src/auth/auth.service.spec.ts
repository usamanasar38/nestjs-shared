import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  const mockGetConfig = jest.fn();

  beforeEach(async () => {
    jest.resetAllMocks();
    const moduleRef = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: ConfigService,
          useValue: {
            get: mockGetConfig,
          },
        },
      ],
    }).compile();

    authService = moduleRef.get(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should return true when Access token is correct', () => {
    const accessToken = 'somerandomkey';
    mockGetConfig.mockReturnValue(accessToken);
    expect(authService.validateAccessToken(accessToken)).toBeTruthy();
  });

  it('should return false when access token is not correct', () => {
    const accessToken = 'somerandomkey';
    const accessTokenRandom = 'somerandomkeywhichisnottrue';
    mockGetConfig.mockReturnValue(accessToken);
    expect(authService.validateAccessToken(accessTokenRandom)).toBeFalsy();
  });
});
