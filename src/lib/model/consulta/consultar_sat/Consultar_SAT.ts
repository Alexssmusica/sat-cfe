export interface IModelConsultarSAT {
	_numeroSessao: string;
	_EEEEE: string;
	_mensagem: string;
	_cod: string;
	_mensagemSEFAZ: string;
}

export class ModelConsultarSAT implements Readonly<IModelConsultarSAT> {
	_numeroSessao = '';
	_EEEEE = '';
	_mensagem = '';
	_cod = '';
	_mensagemSEFAZ = '';

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
			console.error('ConsultarSAT.FromArray<Exception> ', error);
		}
	};
}
