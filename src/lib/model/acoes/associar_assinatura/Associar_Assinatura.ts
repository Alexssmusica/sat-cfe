export interface IModelAssociarAssinatura {
	_numeroSessao: string;
	_EEEEE: string;
	_CCCC: string;
	_mensagem: string;
	_cod: string;
	_mensagemSEFAZ: string;
}

export class ModelAssociarAssinatura implements IModelAssociarAssinatura {
	_numeroSessao: string;
	_EEEEE: string;
	_CCCC: string;
	_mensagem: string;
	_cod: string;
	_mensagemSEFAZ: string;

	constructor(numeroSessao = '', EEEEE = '', CCCC = '', mensagem = '', cod = '', mensagemSEFAZ = '') {
		this._numeroSessao = numeroSessao;
		this._EEEEE = EEEEE;
		this._CCCC = CCCC;
		this._mensagem = mensagem;
		this._cod = cod;
		this._mensagemSEFAZ = mensagemSEFAZ;
	}

	fromArray: (_value: Array<string>) => void = async (_value: Array<string> = []) => {
		try {
			this._numeroSessao = _value[0];
			this._EEEEE = _value[1];
			this._CCCC = _value[2];
			this._mensagem = _value[3];
			this._cod = _value[4];
			this._mensagemSEFAZ = _value[5];
		} catch (error) {
			console.error('ModelAssociarAssinatura.fromArray<Exception> ', error);
		}
	};
}
