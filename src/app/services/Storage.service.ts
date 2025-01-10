import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const USER_EMAIL = 'auth-email';
const USER_NAME = 'auth-name';
const USER_ROLE = 'auth-role';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    if (!user || !user.email || !user.name || !user.role?.name || !user.token) {
      console.error('Invalid user object passed to saveUser:', user);
      return;
    }

    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.removeItem(USER_EMAIL);
    window.sessionStorage.removeItem(USER_NAME);
    window.sessionStorage.removeItem(USER_ROLE);

    window.sessionStorage.setItem(USER_EMAIL, user.email);
    window.sessionStorage.setItem(USER_NAME, user.name);
    window.sessionStorage.setItem(USER_ROLE, user.role.name);
    window.sessionStorage.setItem(USER_KEY, user.token);
  }

  public getUser(): { token: string; email: string; name: string; role: string } | null {
    const token = window.sessionStorage.getItem(USER_KEY);
    const email = window.sessionStorage.getItem(USER_EMAIL);
    const name = window.sessionStorage.getItem(USER_NAME);
    const role = window.sessionStorage.getItem(USER_ROLE);

    if (token && email && name && role) {
      return { token, email, name, role };
    }

    return null;
  }

  public isLoggedIn(): boolean {
    return !!this.getUser();
  }
}