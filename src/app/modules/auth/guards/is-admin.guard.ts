
import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage['User_Type']==1) {
      return true;
    }
    else {
      this.router.navigateByUrl('/auth')
      return false;
    }
  }   
}

export const isAdminGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {

  return inject(PermissionsService).canActivate(next, state);
}

