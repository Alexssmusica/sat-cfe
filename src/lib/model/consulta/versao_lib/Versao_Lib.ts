export interface IVersaoLib {
	_versaoDLL: string;
}

export class ModelVersaoLib implements IVersaoLib {
	_versaoDLL: string;

	constructor(versaoDLL = '') {
		this._versaoDLL = versaoDLL;
	}
}
