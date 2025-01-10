import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router;
  const jwtToken = window.sessionStorage.getItem('auth-user');

  if (jwtToken) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
