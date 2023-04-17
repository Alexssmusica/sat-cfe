import { ffiLibrary } from '../../../utils/SAT_Library';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelConsultarNumeroSessao } from '../../model/consulta/consultar_numero_sessao/Consultar_Numero_Sessao';

export const consultarNumeroSessao: (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_cNumeroSessao: number
) => Promise<ModelConsultarNumeroSessao> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_cNumeroSessao: number
): Promise<ModelConsultarNumeroSessao> {
	return new Promise<ModelConsultarNumeroSessao>((resolve, reject) => {
		try {
			ffiLibrary.ConsultarNumeroSessao.async(_numeroSessao, _codigoAtivacao, _cNumeroSessao, (error, resultConsultarNumeroSessao) => {
				if (error) {
					throw new Error(error);
				}

				resultConsultarNumeroSessao = UTF8.decode(resultConsultarNumeroSessao as string);
				const _consultarNumeroSessao = new ModelConsultarNumeroSessao();
				_consultarNumeroSessao.fromArray(resultConsultarNumeroSessao.split('|'));
				resolve(_consultarNumeroSessao);
			});
		} catch (error) {
			reject(error);
		}
	});
};
