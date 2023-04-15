import { CFe } from './cfe/cfe';
import { Builder } from 'xml2js';

export interface IBaseCFe {
	CFe: CFe;
}

export class BaseCFe implements IBaseCFe {
	CFe: CFe;

	//TODO Verificar instância correta
	// @ts-ignore
	constructor(cfe: CFe = new CFe()) {
		this.CFe = cfe;
	}

	toXML: () => string = (): string => {
		try {
			const builder = new Builder();
			return builder.buildObject(
				JSON.parse(
					JSON.stringify(this, (key, value) => {
						if (value !== null && value !== '') return value;
					})
				)
			);
		} catch (error) {
			console.error('BaseCFe.toXML<Exception> ', error);
			throw new Error(error);
		}
	};
}
