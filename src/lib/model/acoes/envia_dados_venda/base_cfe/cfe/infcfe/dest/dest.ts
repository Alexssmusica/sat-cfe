export interface IDest {
	CNPJ: string;
	CPF: string;
	xNome: string;
}

/** Grupo de identificação do Destinatário do CF-e
 * @param { number } CNPJ - CNPJ do destinatário.
 * @param { string } CPF - CPF do destinatário.
 * @param { string } xNome - Razão Social ou Nome do destinatário.
 */
export class Dest implements IDest {
	CNPJ: string;
	CPF: string;
	xNome: string;

	constructor(CNPJ: string = '', CPF: string = '', xNome: string = '') {
		this.CNPJ = CNPJ;
		this.CPF = CPF;
		this.xNome = xNome;
	}
}
