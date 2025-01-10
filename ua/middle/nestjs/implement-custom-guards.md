#### * Implement custom guards

В контексті програмування, "custom guards" можуть мати різне значення залежно від мови і фреймворку, які ви використовуєте. Наприклад, у фреймворку Angular такі guards використовуються для контролю доступу до маршрутів. У різних мовах і фреймворках реалізація таких об'єктів може виглядати трохи інакше.

Ось наведено приклад реалізації "custom guard" в Angular для захисту маршруту:

### Приклад реалізації Custom Guard в Angular

1. Спочатку, створіть guard за допомогою Angular CLI:

   ```bash
   ng generate guard auth
   ```

2. Це створить файл з класом, який імплементує `CanActivate` інтерфейс. Відредагуємо його для додавання логіки аутентифікації:

   ```typescript
   import { Injectable } from '@angular/core';
   import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
   import { Observable } from 'rxjs';
   import { AuthService } from './auth.service';

   @Injectable({
     providedIn: 'root'
   })
   export class AuthGuard implements CanActivate {

     constructor(private authService: AuthService) {}

     canActivate(
       route: ActivatedRouteSnapshot,
       state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       return this.authService.isAuthenticated();
     }
   }
   ```

   У цьому прикладі `AuthGuard` використовує `AuthService` для визначення, чи користувач аутентифікований.

3. Тепер включіть цей guard у ваш routes configuration:

   ```typescript
   import { NgModule } from '@angular/core';
   import { RouterModule, Routes } from '@angular/router';
   import { AuthGuard } from './auth.guard';
   import { HomeComponent } from './home/home.component';
   import { LoginComponent } from './login/login.component';

   const routes: Routes = [
     { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
     { path: 'login', component: LoginComponent }
   ];

   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRoutingModule { }
   ```

4. У сервіса `AuthService` повинна бути визначена логіка, яка означатиме, що користувач аутентифікований. Наприклад:

   ```typescript
   import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root'
   })
   export class AuthService {

     private isLoggedIn: boolean = false; // Це значення має встановлюватись на основі реальної логіки аутентифікації

     isAuthenticated(): boolean {
       return this.isLoggedIn;
     }

     // Методи для входу/виходу могли б бути тут також
   }
   ```

Тепер, коли ви намагаєтеся перейти на маршрут `/home`, `AuthGuard` перевірятиме, чи користувач аутентифікований, і дозволить або заборонить доступ відповідно. Це простий приклад, але він демонструє основну ідею використання custom guards для захисту маршрутів в Angular.

| Back | Forward |
|---|---|
| [Create custom pipes](/ua/middle/nestjs/create-custom-pipelines.md)  | [Write and execute integration tests](/ua/middle/nestjs/write-unit-tests.md) |