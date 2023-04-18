export interface IModelExtrairLogs {
	_numeroSessao: string;
	_EEEEE: string;
	_mensagem: string;
	_cod: string;
	_mensagemSEFAZ: string;
	_arquivoLog: string;
	_arquivoLogString: string | null;
}

export class ModelExtrairLogs implements IModelExtrairLogs {
	_numeroSessao: string;
	_EEEEE: string;
	_mensagem: string;
	_cod: string;
	_mensagemSEFAZ: string;
	_arquivoLog: string;
	_arquivoLogString: string | null;

	constructor(numeroSessao = '', EEEEE = '', mensagem = '', cod = '', mensagemSEFAZ = '', arquivoLog = '') {
		this._numeroSessao = numeroSessao;
		this._EEEEE = EEEEE;
		this._mensagem = mensagem;
		this._cod = cod;
		this._mensagemSEFAZ = mensagemSEFAZ;
		this._arquivoLog = arquivoLog;
	}

	fromArray: (_value: Array<string>) => void = async (_value: Array<string> = []) => {
		try {
			this._numeroSessao = _value[0];
			this._EEEEE = _value[1];
			this._mensagem = _value[2];
			this._cod = _value[3];
			this._mensagemSEFAZ = _value[4];
			this._arquivoLog = _value[5];
			this.toObject();
		} catch (error) {
			console.error('ModelExtrairLogs.fromArray<Exception> ', error);
		}
	};

	toObject() {
		let arquivoLogString: string | null = null;
		if (this._arquivoLog) {
			const logString = Buffer.from(this._arquivoLog, 'base64').toString();
			arquivoLogString = logString;
		}

		this._arquivoLogString = arquivoLogString;
	}
}
