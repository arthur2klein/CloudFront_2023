import { UsersI } from 'src/app/shared/models/users-i';

export interface EvenementI {
	titre: string;
	date: number | Date;
	places: number;
	horaires: HoraireI;
	info?: string;
	image_url?: string;
}
interface HoraireI {
	debut: string;
	fin: string;
}
