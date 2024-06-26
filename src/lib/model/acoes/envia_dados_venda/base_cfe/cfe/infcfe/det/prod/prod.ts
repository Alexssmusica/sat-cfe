export interface IProd {
	cProd: string;
	cEAN: string;
	xProd: string;
	NCM: string;
	CEST: number;
	CFOP: number;
	uCom: string;
	qCom: number;
	vUnCom: number;
	indRegra: string;
	vDesc: string;
}

/** Grupo de identificação do Destinatário do CF-e
 * @param { string } cProd - Código do produto ou serviço
 * @param { string } cEAN - GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras
 * @param { string } xProd - Descrição do produto ou serviço
 * @param { string } NCM - Código NCM com 8 dígitos ou 2 dígitos (gênero)
 * @param { number } CEST - Código Especificador da Substituição Tributária
 * @param { number } CFOP - Código Fiscal de Operações e Prestações
 * @param { string } uCom - Unidade Comercial
 * @param { number } qCom - Quantidade Comercia
 * @param { number } vUnCom - Valor Unitário de Comercialização
 * @param { string } indRegra - Regra de cálculo A - Arredondamento | T - Truncamento
 * @param { string } vDesc - Valor do Desconto sobre item
 */
export class Prod implements IProd {
	cProd: string;
	cEAN: string;
	xProd: string;
	NCM: string;
	CEST: number;
	CFOP: number;
	uCom: string;
	qCom: number;
	vUnCom: number;
	indRegra: string;
	vDesc: string;

	constructor(
		cProd = '',
		cEAN = '',
		xProd = '',
		NCM = '',
		CEST = 0,
		CFOP = 0,
		uCom = '',
		qCom = 0,
		vUnCom = 0,
		indRegra = '',
		vDesc = ''
	) {
		this.cProd = cProd;
		this.cEAN = cEAN;
		this.xProd = xProd;
		this.NCM = NCM;
		this.CEST = CEST;
		this.CFOP = CFOP;
		this.uCom = uCom;
		this.qCom = qCom;
		this.vUnCom = vUnCom;
		this.indRegra = indRegra;
		this.vDesc = vDesc;
	}
}
