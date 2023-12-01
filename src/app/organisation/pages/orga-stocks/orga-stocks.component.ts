import { Component } from '@angular/core';

@Component({
  selector: 'app-orga-stocks',
  templateUrl: './orga-stocks.component.html',
  styleUrls: ['./orga-stocks.component.css']
})
export class OrgaStocksComponent {
  stocks_alimentaire: Map<string, number> = new Map<string, number>([
    ["bouteille d'eau (petite)", 50],
    ["bouteille d'eau (grande)", 21],
    ["bouteille d'eau gazeuse", 48],
    ["canette de coca", 92],
    ["bouteille de jus de pomme", 15],
    ["bouteille de jus d'orange", 9],
    ["bouteille de jus de raisin", 11],
    ["bouteille de bière (petite)", 97],
  ]);
  stocks_meubles: Map<string, number> = new Map<string, number>([
    ["chaise", 84],
    ["table (petite)", 15],
    ["table (grande)", 21],
  ]);
  stocks_menage: Map<string, number> = new Map<string, number>([
    ["balais", 5],
    ["balais de serpière", 2],
    ["serpières", 12],
    ["chiffons", 12],
    ["microfibre", 3],
    ["balayette", 4],
    ["pelle", 4],
    ["bouteille de vinaigre", 3],
    ["bouteille de savon noire", 5],
    ["liquide vaisselle", 3],
    ["chiffon de vaisselle", 21],
    ["torchon de vaisselle", 18],
    ["essuie-main", 6],
  ]);
}
