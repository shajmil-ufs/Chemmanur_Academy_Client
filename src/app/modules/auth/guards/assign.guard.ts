

import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage['Access_Token']) {
      if(localStorage['User_Type']==1){

        this.router.navigateByUrl('/admin')
      }else if(localStorage['User_Type']==2){

      }
      return false;
    }
    else {
      return true;

    }
  }   
}

export const assignGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {

  return inject(PermissionsService).canActivate(next, state);
}