import { ffiLibrary } from '../../../utils/SAT_Library';
import { ffiLibrary as ffiLibraryEmulador } from '../../../utils/SAT_Library_Emulador';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelConsultarStatusOperacional } from '../../model/consulta/consultar_status_operacional/Consultar_Status_Operacional';

export const consultarStatusOperacional: (_numeroSessao: number, _codigoAtivacao: string) => Promise<ModelConsultarStatusOperacional> =
	async function (_numeroSessao: number, _codigoAtivacao: string): Promise<ModelConsultarStatusOperacional> {
		return new Promise<ModelConsultarStatusOperacional>((resolve, reject) => {
			try {
				ffiLibrary.ConsultarStatusOperacional.async(_numeroSessao, _codigoAtivacao, (error, resultConsultarStatusOperacional) => {
					if (error) {
						throw new Error(error);
					}

					resultConsultarStatusOperacional = UTF8.decode(resultConsultarStatusOperacional as string);
					const _consultarStatusOperacional = new ModelConsultarStatusOperacional();
					_consultarStatusOperacional.fromArray(resultConsultarStatusOperacional.split('|'));
					resolve(_consultarStatusOperacional);
				});
			} catch (error) {
				reject(error);
			}
		});
	};

export const consultarStatusOperacionalEmulador: (
	_numeroSessao: number,
	_codigoAtivacao: string
) => Promise<ModelConsultarStatusOperacional> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string
): Promise<ModelConsultarStatusOperacional> {
	return new Promise<ModelConsultarStatusOperacional>((resolve, reject) => {
		try {
			ffiLibraryEmulador.ConsultarStatusOperacional.async(
				_numeroSessao,
				_codigoAtivacao,
				(error, resultConsultarStatusOperacional) => {
					if (error) {
						throw new Error(error);
					}

					resultConsultarStatusOperacional = UTF8.decode(resultConsultarStatusOperacional as string);
					const _consultarStatusOperacional = new ModelConsultarStatusOperacional();
					_consultarStatusOperacional.fromArray(resultConsultarStatusOperacional.split('|'));
					resolve(_consultarStatusOperacional);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};
