import { ffiLibrary } from '../../../utils/SAT_Library';
import { ffiLibrary as ffiLibraryEmulador } from '../../../utils/SAT_Library_Emulador';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelTesteFimFim } from '../../model/acoes/teste_fim_fim/Teste_Fim_Fim';

export const testeFimFim: (_numeroSessao: number, _codigoAtivacao: string, _baseCFe: string) => Promise<ModelTesteFimFim> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_baseCFe: string
): Promise<ModelTesteFimFim> {
	return new Promise<ModelTesteFimFim>((resolve, reject) => {
		try {
			ffiLibrary.TesteFimAFim.async(_numeroSessao, _codigoAtivacao, _baseCFe, (error, resultTesteFimFim) => {
				if (error) {
					throw new Error(error);
				}

				resultTesteFimFim = UTF8.decode(resultTesteFimFim as string);
				const _testeFimFim = new ModelTesteFimFim();
				_testeFimFim.fromArray(resultTesteFimFim.split('|'));
				resolve(_testeFimFim);
			});
		} catch (error) {
			reject(error);
		}
	});
};

export const testeFimFimEmulador: (_numeroSessao: number, _codigoAtivacao: string, _baseCFe: string) => Promise<ModelTesteFimFim> =
	async function (_numeroSessao: number, _codigoAtivacao: string, _baseCFe: string): Promise<ModelTesteFimFim> {
		return new Promise<ModelTesteFimFim>((resolve, reject) => {
			try {
				ffiLibraryEmulador.TesteFimAFim.async(_numeroSessao, _codigoAtivacao, _baseCFe, (error, resultTesteFimFim) => {
					if (error) {
						throw new Error(error);
					}

					resultTesteFimFim = UTF8.decode(resultTesteFimFim as string);
					const _testeFimFim = new ModelTesteFimFim();
					_testeFimFim.fromArray(resultTesteFimFim.split('|'));
					resolve(_testeFimFim);
				});
			} catch (error) {
				reject(error);
			}
		});
	};
