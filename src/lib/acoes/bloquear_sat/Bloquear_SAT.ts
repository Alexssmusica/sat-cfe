import { ffiLibrary } from '../../../utils/SAT_Library';
import { ffiLibrary as ffiLibraryEmulador } from '../../../utils/SAT_Library_Emulador';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelBloquearSAT } from '../../model/acoes/bloquear_sat/Bloquear_SAT';

export const bloquearSAT: (_numeroSessao: number, _codigoAtivacao: string) => Promise<ModelBloquearSAT> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string
): Promise<ModelBloquearSAT> {
	return new Promise<ModelBloquearSAT>((resolve, reject) => {
		try {
			ffiLibrary.BloquearSAT.async(_numeroSessao, _codigoAtivacao, (error, resultBloquearSAT) => {
				if (error) {
					throw new Error(error);
				}

				resultBloquearSAT = UTF8.decode(resultBloquearSAT as string) as string;
				const _bloquearSAT = new ModelBloquearSAT();
				_bloquearSAT.fromArray(resultBloquearSAT.split('|'));
				resolve(_bloquearSAT);
			});
		} catch (error) {
			reject(error);
		}
	});
};

export const bloquearSATEmulador: (_numeroSessao: number, _codigoAtivacao: string) => Promise<ModelBloquearSAT> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string
): Promise<ModelBloquearSAT> {
	return new Promise<ModelBloquearSAT>((resolve, reject) => {
		try {
			ffiLibraryEmulador.BloquearSAT.async(_numeroSessao, _codigoAtivacao, (error, resultBloquearSAT) => {
				if (error) {
					throw new Error(error);
				}

				resultBloquearSAT = UTF8.decode(resultBloquearSAT as string) as string;
				const _bloquearSAT = new ModelBloquearSAT();
				_bloquearSAT.fromArray(resultBloquearSAT.split('|'));
				resolve(_bloquearSAT);
			});
		} catch (error) {
			reject(error);
		}
	});
};
