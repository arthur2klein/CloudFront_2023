import { UsersI } from 'src/app/shared/models/users-i';

export interface EvenementI {
	lieu: string;
	date: Date;
	organisateur: UsersI;
	participants: Array<UsersI>;
}
