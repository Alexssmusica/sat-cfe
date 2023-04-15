import { ffiLibrary } from '../../../utils/SAT_Library';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelAssociarAssinatura } from '../../model/acoes/associar_assinatura/Associar_Assinatura';

export const associarAssinatura: (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_CNPJvalue: string,
	_assinaturaCNPJs: string
) => Promise<ModelAssociarAssinatura> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_CNPJvalue: string,
	_assinaturaCNPJs: string
): Promise<ModelAssociarAssinatura> {
	return new Promise<ModelAssociarAssinatura>((resolve, reject) => {
		try {
			ffiLibrary.AssociarAssinatura.async(
				_numeroSessao,
				_codigoAtivacao,
				_CNPJvalue,
				_assinaturaCNPJs,
				(error, resultAssociarAssinatura) => {
					if (error) {
						throw new Error(error);
					}

					resultAssociarAssinatura = UTF8.decode(resultAssociarAssinatura);
					const _associarAssinatura = new ModelAssociarAssinatura();
					_associarAssinatura.fromArray(resultAssociarAssinatura.split('|'));
					resolve(_associarAssinatura);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};