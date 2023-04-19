import { ffiLibrary } from '../../../utils/SAT_Library';
import { ModelGeraNumeroSessao } from '../../model/acoes/gera_numero_sessao/Gera_Numero_Sessao';
export const geraNumeroSessao: () => Promise<ModelGeraNumeroSessao> = async function (): Promise<ModelGeraNumeroSessao> {
	return new Promise<any>((resolve, reject) => {
		try {
			ffiLibrary.GeraNumeroSessao.async((error, numeroSessao) => {
				if (error) {
					throw new Error(error);
				}

				const _numeroSessao = new ModelGeraNumeroSessao(numeroSessao);
				resolve(_numeroSessao);
			});
		} catch (error) {
			reject(error);
		}
	});
};
