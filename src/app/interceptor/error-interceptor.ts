import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBox_Component } from '../modules/shared/components/DialogBox/DialogBox.component';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router, public dialogBox: MatDialog) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status)) {
                let user =localStorage.getItem('User_Type')
                console.log('user: ', user);
                localStorage.clear();
                console.log('err: ', err?.error?.error);
                if(user=='2'){
                    this.router.navigateByUrl('auth/user')

                }else if(user=='1'){

                    this.router.navigateByUrl('auth')
                }
               
            }

            console.log('err?.error?: ', err?.error);

            if (err?.error?.error?.message) {
                console.log(' err?.error?.errors?.message: ',  err?.error?.errors?.message);
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: 'Dialogbox-Class',
                    data: { Message: err?.error?.error?.message, Type: "2" },
                    width: '400px' // Set your desired width here
                  });
                  
            }

            return throwError(() => err?.error?.errors?.message);
        }))
    }
}