export interface IGeraNumeroSessao {
	_numeroSessao: number;
}

export class ModelGeraNumeroSessao implements IGeraNumeroSessao {
	_numeroSessao: number;

	constructor(numeroSessao = 0) {
		this._numeroSessao = numeroSessao;
	}
}
