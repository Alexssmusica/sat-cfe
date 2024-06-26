export interface IModelAtualizarSoftwareSAT {
	_numeroSessao: string;
	_EEEEE: string;
	_mensagem: string;
	_cod: string;
	_mensagemSEFAZ: string;
}

export class ModelAtualizarSoftwareSAT implements IModelAtualizarSoftwareSAT {
	_numeroSessao: string;
	_EEEEE: string;
	_mensagem: string;
	_cod: string;
	_mensagemSEFAZ: string;

	constructor(numeroSessao = '', EEEEE = '', mensagem = '', cod = '', mensagemSEFAZ = '') {
		this._numeroSessao = numeroSessao;
		this._EEEEE = EEEEE;
		this._mensagem = mensagem;
		this._cod = cod;
		this._mensagemSEFAZ = mensagemSEFAZ;
	}

	fromArray: (_value: Array<string>) => void = async (_value: Array<string> = []) => {
		try {
			this._numeroSessao = _value[0];
			this._EEEEE = _value[1];
			this._mensagem = _value[2];
			this._cod = _value[3];
			this._mensagemSEFAZ = _value[4];
		} catch (error) {
			console.error('ModelAtualizarSoftwareSAT.fromArray<Exception> ', error);
		}
	};
}
