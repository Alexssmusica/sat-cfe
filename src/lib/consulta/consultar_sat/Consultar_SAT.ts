import { ffiLibrary } from '../../../utils/SAT_Library';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelConsultarSAT } from '../../model/consulta/consultar_sat/Consultar_SAT';

export const consultarSAT: (_numeroSessao: number) => Promise<ModelConsultarSAT> = async function (
	_numeroSessao: number
): Promise<ModelConsultarSAT> {
	return new Promise<ModelConsultarSAT>((resolve, reject) => {
		try {
			let resultConsultarSAT = ffiLibrary.ConsultarSAT(_numeroSessao);
			resultConsultarSAT = UTF8.decode(resultConsultarSAT as string);
			const consultarSAT = new ModelConsultarSAT();
			consultarSAT.fromArray(resultConsultarSAT.split('|'));
			resolve(consultarSAT);
		} catch (error) {
			reject(error);
		}
	});
};
