import { ffiLibrary } from '../../../utils/SAT_Library';
import { ffiLibrary as ffiLibraryEmulador } from '../../../utils/SAT_Library_Emulador';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelTrocarCodigoAtivacao } from '../../model/acoes/trocar_codigo_atiavacao/Trocar_Codigo_Ativacao';

export const trocarCodigoDeAtivacao: (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_opcao: number,
	_novoCodigo: string,
	_confNovoCodigo: string
) => Promise<ModelTrocarCodigoAtivacao> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_opcao: number,
	_novoCodigo: string,
	_confNovoCodigo: string
): Promise<ModelTrocarCodigoAtivacao> {
	return new Promise<ModelTrocarCodigoAtivacao>((resolve, reject) => {
		try {
			ffiLibrary.TrocarCodigoDeAtivacao.async(
				_numeroSessao,
				_codigoAtivacao,
				_opcao,
				_novoCodigo,
				_confNovoCodigo,
				(error, resultTrocarCodigoDeAtivacao) => {
					if (error) {
						throw new Error(error);
					}

					resultTrocarCodigoDeAtivacao = UTF8.decode(resultTrocarCodigoDeAtivacao as string);
					const _trocarCodigoDeAtivacao = new ModelTrocarCodigoAtivacao();
					_trocarCodigoDeAtivacao.fromArray(resultTrocarCodigoDeAtivacao.split('|'));
					resolve(_trocarCodigoDeAtivacao);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};

export const trocarCodigoDeAtivacaoEmulador: (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_opcao: number,
	_novoCodigo: string,
	_confNovoCodigo: string
) => Promise<ModelTrocarCodigoAtivacao> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_opcao: number,
	_novoCodigo: string,
	_confNovoCodigo: string
): Promise<ModelTrocarCodigoAtivacao> {
	return new Promise<ModelTrocarCodigoAtivacao>((resolve, reject) => {
		try {
			ffiLibraryEmulador.TrocarCodigoDeAtivacao.async(
				_numeroSessao,
				_codigoAtivacao,
				_opcao,
				_novoCodigo,
				_confNovoCodigo,
				(error, resultTrocarCodigoDeAtivacao) => {
					if (error) {
						throw new Error(error);
					}

					resultTrocarCodigoDeAtivacao = UTF8.decode(resultTrocarCodigoDeAtivacao as string);
					const _trocarCodigoDeAtivacao = new ModelTrocarCodigoAtivacao();
					_trocarCodigoDeAtivacao.fromArray(resultTrocarCodigoDeAtivacao.split('|'));
					resolve(_trocarCodigoDeAtivacao);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};
