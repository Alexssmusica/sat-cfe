import { ffiLibrary } from '../../../utils/SAT_Library';
import { ffiLibrary as ffiLibraryEmulador } from '../../../utils/SAT_Library_Emulador';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelCancelarUltimaVenda } from '../../model/acoes/cancela_ultima_venda/Cancelar_Ultima_Venda';

export const cancelarUltimaVenda: (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_chave: string,
	_baseCFeCancelamento: string
) => Promise<ModelCancelarUltimaVenda> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_chave: string,
	_baseCFeCancelamento: string
): Promise<ModelCancelarUltimaVenda> {
	return new Promise<ModelCancelarUltimaVenda>((resolve, reject) => {
		try {
			ffiLibrary.CancelarUltimaVenda.async(
				_numeroSessao,
				_codigoAtivacao,
				_chave,
				_baseCFeCancelamento,
				(error, resultCancelarUltimaVenda) => {
					if (error) {
						throw new Error(error);
					}

					resultCancelarUltimaVenda = UTF8.decode(resultCancelarUltimaVenda as string);
					const _cancelarUltimaVenda = new ModelCancelarUltimaVenda();
					_cancelarUltimaVenda.fromArray(resultCancelarUltimaVenda.split('|'));
					resolve(_cancelarUltimaVenda);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};

export const cancelarUltimaVendaEmulador: (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_chave: string,
	_baseCFeCancelamento: string
) => Promise<ModelCancelarUltimaVenda> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_chave: string,
	_baseCFeCancelamento: string
): Promise<ModelCancelarUltimaVenda> {
	return new Promise<ModelCancelarUltimaVenda>((resolve, reject) => {
		try {
			ffiLibraryEmulador.CancelarUltimaVenda.async(
				_numeroSessao,
				_codigoAtivacao,
				_chave,
				_baseCFeCancelamento,
				(error, resultCancelarUltimaVenda) => {
					if (error) {
						throw new Error(error);
					}

					resultCancelarUltimaVenda = UTF8.decode(resultCancelarUltimaVenda as string);
					const _cancelarUltimaVenda = new ModelCancelarUltimaVenda();
					_cancelarUltimaVenda.fromArray(resultCancelarUltimaVenda.split('|'));
					resolve(_cancelarUltimaVenda);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};
