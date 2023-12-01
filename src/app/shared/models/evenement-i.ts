export interface EvenementI {
  id?: string;
  date: number;
  horaire: {
    debut: string;
    fin: string;
  };
  image_url?: string;
  places: number;
  titre: string;
  info?: string;
}
