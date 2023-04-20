import { ffiLibrary } from '../../../utils/SAT_Library';
import { ffiLibrary as ffiLibraryEmulador } from '../../../utils/SAT_Library_Emulador';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelEnviarDadosVenda } from '../../model/acoes/envia_dados_venda/Enviar_Dados_Venda';

export const enviarDadosVenda: (_numeroSessao: number, _codigoAtivacao: string, _baseCFe: string) => Promise<ModelEnviarDadosVenda> =
	async function (_numeroSessao: number, _codigoAtivacao: string, _baseCFe: string): Promise<ModelEnviarDadosVenda> {
		return new Promise<ModelEnviarDadosVenda>((resolve, reject) => {
			try {
				ffiLibrary.EnviarDadosVenda.async(_numeroSessao, _codigoAtivacao, _baseCFe, (error, resultEnviarDadosVenda) => {
					if (error) {
						throw new Error(error);
					}

					resultEnviarDadosVenda = UTF8.decode(resultEnviarDadosVenda as string);
					const _enviarDadosVenda = new ModelEnviarDadosVenda();
					_enviarDadosVenda.fromArray(resultEnviarDadosVenda.split('|'));
					resolve(_enviarDadosVenda);
				});
			} catch (error) {
				reject(error);
			}
		});
	};

export const enviarDadosVendaEmulador: (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_baseCFe: string
) => Promise<ModelEnviarDadosVenda> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_baseCFe: string
): Promise<ModelEnviarDadosVenda> {
	return new Promise<ModelEnviarDadosVenda>((resolve, reject) => {
		try {
			ffiLibraryEmulador.EnviarDadosVenda.async(_numeroSessao, _codigoAtivacao, _baseCFe, (error, resultEnviarDadosVenda) => {
				if (error) {
					throw new Error(error);
				}

				resultEnviarDadosVenda = UTF8.decode(resultEnviarDadosVenda as string);
				const _enviarDadosVenda = new ModelEnviarDadosVenda();
				_enviarDadosVenda.fromArray(resultEnviarDadosVenda.split('|'));
				resolve(_enviarDadosVenda);
			});
		} catch (error) {
			reject(error);
		}
	});
};
