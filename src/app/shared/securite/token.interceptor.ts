import { AuthService } from 'src/app/shared/services/auth.service';
import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	etetes: any;

	constructor(private user: AuthService) {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		// If I'm connected and I have a token inside my profile
		if (this.user.isLoggedIn && this.user.user.token!.length > 0) {
			// Creation of new headers
			this.entetes = {
				headers: new HttpHeaders(
					{'Authorization': 'Bearer ' + this.user.user.token}
				)
			};
			const httpToken = request.clone(this.entetes);

			return next.handle(httpToken);
		} else {
			return next.handle(request);
		}
	}
