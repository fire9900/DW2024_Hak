import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
  // const router = inject(Router);
  // router.navigate(['/login']);
  // return false;
};
