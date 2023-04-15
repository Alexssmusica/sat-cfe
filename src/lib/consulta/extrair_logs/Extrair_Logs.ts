import { ffiLibrary } from '../../../utils/SAT_Library';
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

				resultExtrairLogs = UTF8.decode(resultExtrairLogs);
				const _extrairLogs = new ModelExtrairLogs();
				_extrairLogs.fromArray(resultExtrairLogs.split('|'));
				resolve(_extrairLogs);
			});
		} catch (error) {
			reject(error);
		}
	});
};
