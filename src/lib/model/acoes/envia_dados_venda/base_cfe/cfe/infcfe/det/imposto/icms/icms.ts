import { ICMSSN102 } from './csosn/icmssn102/icmssn102';
import { ICMSSN900 } from './csosn/icmssn900/icmssn900';
import { ICMS00 } from './cst/icms00/icms00';
import { ICMS40 } from './cst/icms40/icms40';

export interface IICMS {
	ICMS00: ICMS00 | null;
	ICMS40: ICMS40 | null;
	ICMSSN102: ICMSSN102 | null;
	ICMSSN900: ICMSSN900 | null;
}

/** Grupo do ICMS da Operação própria e ST
 * @param { ICMS00 } ICMS00 - Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS= 00, 20, 90.
 * @param { ICMS40 } ICMS40 - Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS = 40, 41, 60.
 * @param { ICMSSN102 } ICMSSN102 - cRegTrib=1 – Simples Nacional e CSOSN=102, 300, 400, 500.
 * @param { ICMSSN900 } ICMSSN900 - Campo cRegTrib=1 – Simples Nacional e CSOSN=900
 */
export class ICMS implements IICMS {
	ICMS00: ICMS00 | null;
	ICMS40: ICMS40 | null;
	ICMSSN102: ICMSSN102 | null;
	ICMSSN900: ICMSSN900 | null;

	constructor(
		icms00: ICMS00 | null = null,
		icms40: ICMS40 | null = null,
		icmssn102: ICMSSN102 | null = null,
		icmssn900: ICMSSN900 | null = null
	) {
		this.ICMS00 = icms00;
		this.ICMS40 = icms40;
		this.ICMSSN102 = icmssn102;
		this.ICMSSN900 = icmssn900;
	}
}
