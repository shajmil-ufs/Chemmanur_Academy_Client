
import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage['User_Type']==2) {
      return true;
    }
    else {
      console.log('localS ', localStorage['User_Type']);
      this.router.navigateByUrl('/auth/user')
      return false;
    }
  }   
}

export const isUserGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {

  return inject(PermissionsService).canActivate(next, state);
}

