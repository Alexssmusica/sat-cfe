import { ffiLibrary } from '../../../utils/SAT_Library';
import { ffiLibrary as ffiLibraryEmulador } from '../../../utils/SAT_Library_Emulador';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelExtrairLogs } from '../../model/consulta/extrair_logs/Extrair_Logs';

export const extrairLogs: (_numeroSessao: number, _codigoAtivacao: string) => Promise<ModelExtrairLogs> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string
): Promise<ModelExtrairLogs> {
	return new Promise<ModelExtrairLogs>((resolve, reject) => {
		try {
			ffiLibrary.ExtrairLogs.async(_numeroSessao, _codigoAtivacao, (error, resultExtrairLogs) => {
				if (error) {
					throw new Error(error);
				}

				resultExtrairLogs = UTF8.decode(resultExtrairLogs as string);
				const _extrairLogs = new ModelExtrairLogs();
				_extrairLogs.fromArray(resultExtrairLogs.split('|'));
				resolve(_extrairLogs);
			});
		} catch (error) {
			reject(error);
		}
	});
};

export const extrairLogsEmulador: (_numeroSessao: number, _codigoAtivacao: string) => Promise<ModelExtrairLogs> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string
): Promise<ModelExtrairLogs> {
	return new Promise<ModelExtrairLogs>((resolve, reject) => {
		try {
			ffiLibraryEmulador.ExtrairLogs.async(_numeroSessao, _codigoAtivacao, (error, resultExtrairLogs) => {
				if (error) {
					throw new Error(error);
				}

				resultExtrairLogs = UTF8.decode(resultExtrairLogs as string);
				const _extrairLogs = new ModelExtrairLogs();
				_extrairLogs.fromArray(resultExtrairLogs.split('|'));
				resolve(_extrairLogs);
			});
		} catch (error) {
			reject(error);
		}
	});
};
