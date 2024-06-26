import { ffiLibrary } from '../../../utils/SAT_Library';
import { ffiLibrary as ffiLibraryEmulador } from '../../../utils/SAT_Library_Emulador';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelDesbloquearSAT } from '../../model/acoes/desbloquear_sat/Desbloquear_SAT';

export const desbloquearSAT: (_numeroSessao: number, _codigoAtivacao: string) => Promise<ModelDesbloquearSAT> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string
): Promise<ModelDesbloquearSAT> {
	return new Promise<ModelDesbloquearSAT>((resolve, reject) => {
		try {
			ffiLibrary.DesbloquearSAT.async(_numeroSessao, _codigoAtivacao, (error, resultDesbloquearSAT) => {
				if (error) {
					throw new Error(error);
				}

				resultDesbloquearSAT = UTF8.decode(resultDesbloquearSAT as string);
				const _desbloquearSAT = new ModelDesbloquearSAT();
				_desbloquearSAT.fromArray(resultDesbloquearSAT.split('|'));
				resolve(_desbloquearSAT);
			});
		} catch (error) {
			reject(error);
		}
	});
};

export const desbloquearSATEmulador: (_numeroSessao: number, _codigoAtivacao: string) => Promise<ModelDesbloquearSAT> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string
): Promise<ModelDesbloquearSAT> {
	return new Promise<ModelDesbloquearSAT>((resolve, reject) => {
		try {
			ffiLibraryEmulador.DesbloquearSAT.async(_numeroSessao, _codigoAtivacao, (error, resultDesbloquearSAT) => {
				if (error) {
					throw new Error(error);
				}

				resultDesbloquearSAT = UTF8.decode(resultDesbloquearSAT as string);
				const _desbloquearSAT = new ModelDesbloquearSAT();
				_desbloquearSAT.fromArray(resultDesbloquearSAT.split('|'));
				resolve(_desbloquearSAT);
			});
		} catch (error) {
			reject(error);
		}
	});
};
