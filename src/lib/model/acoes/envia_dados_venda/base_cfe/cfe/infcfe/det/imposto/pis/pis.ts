import { PISAliq } from './pisaliq/pisaliq';
import { PISNT } from './pisnt/pisnt';
import { PISOutr } from './pisoutr/pisoutr';
import { PISQtde } from './pisqtde/pisqtde';
import { PISSN } from './pissn/pissn';
import { PISST } from './pisst/pisst';

export interface IPIS {
	PISAliq: PISAliq | null;
	PISQtde: PISQtde | null;
	PISNT: PISNT | null;
	PISSN: PISSN | null;
	PISOutr: PISOutr | null;
	PISST: PISST | null;
}

/** Grupo do PIS
 * @param { PISAliq } PISAliq - Grupo de PIS tributado pela alíquota - CST = 01, 02 e 05.
 * @param { PISQtde } PISQtde - Grupo de PIS tributado por Qtde - CST = 03
 * @param { PISNT } PISNT - Grupo de PIS não tributado - CST = 04, 06, 07, 08 ou 09
 * @param { PISSN } PISSN - Grupo de PIS para contribuinte do SIMPLES NACIONAL - CST = 49
 * @param { PISOutr } PISOutr - Grupo de PIS Outras Operações - CST = 99
 * @param { PISST } PISST - Grupo de PIS Substituição Tributária
 */
export class PIS implements IPIS {
	PISAliq: PISAliq | null;
	PISQtde: PISQtde | null;
	PISNT: PISNT | null;
	PISSN: PISSN | null;
	PISOutr: PISOutr | null;
	PISST: PISST | null;

	constructor(
		pisAliq: PISAliq | null = null,
		pisQtde: PISQtde | null = null,
		pisNT: PISNT | null = null,
		pisSN: PISSN | null = null,
		pisOutr: PISOutr | null = null,
		pisST: PISST | null = null
	) {
		this.PISAliq = pisAliq;
		this.PISQtde = pisQtde;
		this.PISNT = pisNT;
		this.PISSN = pisSN;
		this.PISOutr = pisOutr;
		this.PISST = pisST;
	}
}
