import { Imposto } from './imposto/imposto';
import { Prod } from './prod/prod';

export interface IDet {
	$: {
		nItem: number;
	};
	prod: Prod;
	imposto: Imposto;
	infAdProd: string;
}

/** Grupo do detalhamento de Produtos e Serviços do CF-e
 * @param { number } nItem - Número do item.
 * @param { Prod } prod - TAG de grupo do detalhamento de Produtos e Serviços do CF-e.
 * @param { Imposto } imposto - Grupo de Tributos incidentes no Produto ou Serviço.
 * @param { string } infAdProd - Informações Adicionais do Produto.
 */
export class Det implements IDet {
	$: {
		nItem: number;
	};
	prod: Prod;
	imposto: Imposto;
	infAdProd: string;

	constructor(nItem: number = 0, prod: Prod = new Prod(), imposto: Imposto = new Imposto(), infAdProd: string = '') {
		this.$ = {
			nItem: nItem
		};
		this.prod = prod;
		this.imposto = imposto;
		this.infAdProd = infAdProd;
	}
}
