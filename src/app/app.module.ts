import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'; // Import RouterModule here
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/http.interceptor';
import { ErrorInterceptor } from './interceptor/error-interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SharedModule } from './modules/shared/shared.module';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    LottieModule.forRoot({ player: playerFactory })

  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
