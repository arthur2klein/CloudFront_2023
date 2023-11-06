export interface UsersI {
	nom: string;
	prenom: string;
	email: string;
	status: string;
}
export interface ContactI {
	nom: string;
	prenom: string;
	age: number;
	adresse?: AdresseI;
	telephone: string;
	email: string;
	status?: string;
	infos?: string;
}
interface AdresseI {
	rue: string,
	code_postal: number;
	ville: string;
}
