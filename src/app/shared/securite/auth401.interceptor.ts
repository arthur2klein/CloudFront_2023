import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Auth401Interceptor implements HttpInterceptor {

  constructor(private user: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
		erreur => {
			if (erreur instanceof HttpErrorResponse && erreur.status == 401) {
				this.router.navigateByUrl('/connexion');
			}
			return erreur;
		}
	);
  }
}
