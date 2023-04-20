import { ffiLibrary } from '../../../utils/SAT_Library';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelVersaoLib } from '../../model/consulta/versao_lib/Versao_Lib';

export const versaoLib: () => Promise<ModelVersaoLib> = async function (): Promise<ModelVersaoLib> {
	return new Promise<any>((resolve, reject) => {
		try {
			ffiLibrary.VersaoLib.async((error, versaoDLL) => {
				if (error) {
					throw new Error(error);
				}
				versaoDLL = UTF8.decode(versaoDLL as string);
				const _versaoDLL = new ModelVersaoLib(versaoDLL);
				resolve(_versaoDLL);
			});
		} catch (error) {
			reject(error);
		}
	});
};

export const versaoLibEmulador: () => Promise<ModelVersaoLib> = async function (): Promise<ModelVersaoLib> {
	return new Promise<any>((resolve, reject) => {
		try {
			const versaoDLL = UTF8.decode('Versão SAT DLL 1.1.1');
			const _versaoDLL = new ModelVersaoLib(versaoDLL);
			resolve(_versaoDLL);
		} catch (error) {
			reject(error);
		}
	});
};
