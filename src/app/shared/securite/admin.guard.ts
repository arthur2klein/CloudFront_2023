import {inject} from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {UsersService} from '../services/users.service';

export const adminGuard: CanActivateFn = (route, state) => {
	const user = inject(UsersService);
	return user.has_admin_right();
};
