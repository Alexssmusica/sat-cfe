import { ffiLibrary } from '../../../utils/SAT_Library';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelAtualizarSoftwareSAT } from '../../model/acoes/atualizar_software_sat/Atualizar_Software_SAT';

export const atualizarSoftwareSAT: (_numeroSessao: number, _codigoAtivacao: string) => Promise<ModelAtualizarSoftwareSAT> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string
): Promise<ModelAtualizarSoftwareSAT> {
	return new Promise<ModelAtualizarSoftwareSAT>((resolve, reject) => {
		try {
			ffiLibrary.AtualizarSoftwareSAT.async(_numeroSessao, _codigoAtivacao, (error, resultAtualizarSoftwareSAT) => {
				if (error) {
					throw new Error(error);
				}

				resultAtualizarSoftwareSAT = UTF8.decode(resultAtualizarSoftwareSAT as string) as string;
				const _atualizarSoftwareSAT = new ModelAtualizarSoftwareSAT();
				_atualizarSoftwareSAT.fromArray(resultAtualizarSoftwareSAT.split('|'));
				resolve(_atualizarSoftwareSAT);
			});
		} catch (error) {
			reject(error);
		}
	});
};
