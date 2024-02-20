import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
    Router
} from '@angular/router';
import { Injectable } from '@angular/core';
// import { UtilityService } from '../providers/utilService';
// import { UserData } from '../providers/user-data';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        // public util: UtilityService,
        // public userData: UserData
    ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('Access_Token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    'authorization': 'Bearer ' + token
                }
            });
        }


        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                  //log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                // this.router.navigateByUrl('/auth');

                return throwError(error);
            }),
        );
    }
    async presentToast(msg) {
        // this.util.showToast(msg);
    }

}
