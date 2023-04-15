import { COFINSAliq } from './cofinsaliq/cofinsaliq';
import { COFINSNT } from './cofinsnt/cofinsnt';
import { COFINSOutr } from './cofinsoutr/cofinsoutr';
import { COFINSQtde } from './cofinsqtde/cofinsqtde';
import { COFINSSN } from './cofinssn/cofinssn';
import { COFINSST } from './cofinsst/cofinsst';

export interface ICOFINS {
	COFINSAliq: COFINSAliq | null;
	COFINSQtde: COFINSQtde | null;
	COFINSNT: COFINSNT | null;
	COFINSSN: COFINSSN | null;
	COFINSOutr: COFINSOutr | null;
	COFINSST: COFINSST | null;
}

/** Grupo do COFINS
 * @param { COFINSAliq } COFINSAliq - Grupo de COFINS tributado pela alíquota - CST = 01, 02 e 05.
 * @param { COFINSQtde } COFINSQtde - Grupo de COFINS tributado por Qtde - CST = 03
 * @param { COFINSNT } COFINSNT - Grupo de COFINS não tributado - CST = 04, 06, 07, 08 ou 09
 * @param { COFINSSN } COFINSSN - Grupo de COFINS para contribuinte do SIMPLES NACIONAL - CST = 49
 * @param { COFINSOutr } COFINSOutr - Grupo de COFINS Outras Operações - CST = 99
 * @param { COFINSST } COFINSST - Grupo de COFINS Substituição Tributária
 */
export class COFINS implements ICOFINS {
	COFINSAliq: COFINSAliq | null;
	COFINSQtde: COFINSQtde | null;
	COFINSNT: COFINSNT | null;
	COFINSSN: COFINSSN | null;
	COFINSOutr: COFINSOutr | null;
	COFINSST: COFINSST | null;

	constructor(
		cofinsAliq: COFINSAliq | null = null,
		cofinsQtde: COFINSQtde | null = null,
		cofinsNT: COFINSNT | null = null,
		cofinsSN: COFINSSN | null = null,
		cofinsOutr: COFINSOutr | null = null,
		cofinsST: COFINSST | null = null
	) {
		this.COFINSAliq = cofinsAliq;
		this.COFINSQtde = cofinsQtde;
		this.COFINSNT = cofinsNT;
		this.COFINSSN = cofinsSN;
		this.COFINSOutr = cofinsOutr;
		this.COFINSST = cofinsST;
	}
}
