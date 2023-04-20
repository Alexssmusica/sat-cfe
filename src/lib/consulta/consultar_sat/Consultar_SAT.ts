import { ffiLibrary } from '../../../utils/SAT_Library';
import { ffiLibrary as ffiLibraryEmulador } from '../../../utils/SAT_Library_Emulador';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelConsultarSAT } from '../../model/consulta/consultar_sat/Consultar_SAT';

export const consultarSAT: (_numeroSessao: number) => Promise<ModelConsultarSAT> = async function (
	_numeroSessao: number
): Promise<ModelConsultarSAT> {
	return new Promise<ModelConsultarSAT>((resolve, reject) => {
		try {
			ffiLibrary.ConsultarSAT.async(_numeroSessao, (error, resultConsultarSAT) => {
				if (error) {
					throw new Error(error);
				}

				resultConsultarSAT = UTF8.decode(resultConsultarSAT);
				const consultarSAT = new ModelConsultarSAT();
				consultarSAT.fromArray(resultConsultarSAT?.split('|'));
				resolve(consultarSAT);
			});
		} catch (error) {
			reject(error);
		}
	});
};

export const consultarSATEmulador: (_numeroSessao: number) => Promise<ModelConsultarSAT> = async function (
	_numeroSessao: number
): Promise<ModelConsultarSAT> {
	return new Promise<ModelConsultarSAT>((resolve, reject) => {
		try {
			ffiLibraryEmulador.ConsultarSAT.async(_numeroSessao, (error, resultConsultarSAT) => {
				if (error) {
					throw new Error(error);
				}

				resultConsultarSAT = UTF8.decode(resultConsultarSAT);
				const consultarSAT = new ModelConsultarSAT();
				consultarSAT.fromArray(resultConsultarSAT?.split('|'));
				resolve(consultarSAT);
			});
		} catch (error) {
			reject(error);
		}
	});
};
