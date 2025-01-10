#### * Implement authentication using Passport.js and JWT

Щоб реалізувати автентифікацію з використанням Passport.js і JWT у проекті Nest.js, виконайте наступні кроки:

### 1. Встановіть необхідні пакети

Спочатку вам потрібно встановити необхідні бібліотеки для роботи з JWT і Passport.js:

```bash
npm install @nestjs/passport passport passport-jwt @nestjs/jwt
```

### 2. Налаштуйте модуль AuthModule

Створіть модуль `AuthModule`, де ви будете налаштовувати всю логіку автентифікації.

```typescript
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'yourSecretKey', // зберігайте в .env для безпеки
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
```

### 3. Створіть AuthService

AuthService буде містити логіку генерації JWT токену та перевірки користувача:

```typescript
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
```

### 4. Реалізуйте стратегію JWT

Створіть `JwtStrategy`, яка буде перевіряти і декодувати токени:

```typescript
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'yourSecretKey', // зберігайте в .env для безпеки
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
```

### 5. Використовуйте захист у контролерах

Захистіть ваші маршрути за допомогою `@UseGuards(AuthGuard('jwt'))`.

```typescript
import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
```

### 6. Створіть користувацький модуль для тестування

Переконайтеся, що у вас є модуль UsersModule, який надає базову функціональність роботи з користувачами.

Цей підхід дозволить вам реалізувати автентифікацію з використанням JWT у додатку Nest.js, забезпечуючи захист ваших API маршрутів. Не забудьте використовувати безпечні способи зберігання секретних ключів, наприклад, через `process.env` або спеціальні конфігураційні файли.

| Back | Forward |
|---|---|
| [Create GraphQL APIs using @nestjs/graphql](/ua/middle/nestjs/create-graphql-apis-using-nestjsgraphql.md)  | [Prioritize middleware execution](/ua/middle/expressjs/execute-middleware-first.md) |