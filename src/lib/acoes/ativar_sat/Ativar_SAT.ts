import { ffiLibrary } from '../../../utils/SAT_Library';
import { ffiLibrary as ffiLibraryEmulador } from '../../../utils/SAT_Library_Emulador';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelAtivarSAT } from '../../model/acoes/ativar_sat/Ativar_SAT';

export const ativarSAT: (
	_numeroSessao: number,
	_subComando: number,
	_codigoDeAtivacao: string,
	_CNPJ: string,
	_cUF: number
) => Promise<ModelAtivarSAT> = async function (
	_numeroSessao: number,
	_subComando: number,
	_codigoDeAtivacao: string,
	_CNPJ: string,
	_cUF: number
): Promise<ModelAtivarSAT> {
	return new Promise<ModelAtivarSAT>((resolve, reject) => {
		try {
			ffiLibrary.AtivarSAT.async(_numeroSessao, _subComando, _codigoDeAtivacao, _CNPJ, _cUF, (error, resultAtivarSAT) => {
				if (error) {
					throw new Error(error);
				}

				resultAtivarSAT = UTF8.decode(resultAtivarSAT as string);
				const _ativarSAT = new ModelAtivarSAT();
				_ativarSAT.fromArray(resultAtivarSAT.split('|'));
				resolve(_ativarSAT);
			});
		} catch (error) {
			reject(error);
		}
	});
};

export const ativarSATEmulador: (
	_numeroSessao: number,
	_subComando: number,
	_codigoDeAtivacao: string,
	_CNPJ: string,
	_cUF: number
) => Promise<ModelAtivarSAT> = async function (
	_numeroSessao: number,
	_subComando: number,
	_codigoDeAtivacao: string,
	_CNPJ: string,
	_cUF: number
): Promise<ModelAtivarSAT> {
	return new Promise<ModelAtivarSAT>((resolve, reject) => {
		try {
			ffiLibraryEmulador.AtivarSAT.async(_numeroSessao, _subComando, _codigoDeAtivacao, _CNPJ, _cUF, (error, resultAtivarSAT) => {
				if (error) {
					throw new Error(error);
				}

				resultAtivarSAT = UTF8.decode(resultAtivarSAT as string);
				const _ativarSAT = new ModelAtivarSAT();
				_ativarSAT.fromArray(resultAtivarSAT.split('|'));
				resolve(_ativarSAT);
			});
		} catch (error) {
			reject(error);
		}
	});
};
