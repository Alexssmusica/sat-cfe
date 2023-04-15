import { CFeCanc } from './CFeCanc/CFeCanc';
import { Builder } from 'xml2js';

export interface IBaseCFeCanc {
	CFeCanc: CFeCanc;
}

export class BaseCFeCanc implements IBaseCFeCanc {
	CFeCanc: CFeCanc;

	constructor(cfe: CFeCanc = new CFeCanc()) {
		this.CFeCanc = cfe;
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
			console.error('BaseCFeCanc.toXML<Exception> ', error);
			throw new Error(error);
		}
	};
}
