import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export function authenticationGuard(): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (authService.getIsAuthenticated()) {
      return true;
    } else {
      return router.navigateByUrl('admin/auth');
    }
  };
}

export function isLoggedGuard(): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (!authService.getIsAuthenticated()) {
      return true;
    } else {
      return router.navigateByUrl('admin/home');
    }
  };
}
