import { ffiLibrary } from '../../../utils/SAT_Library';
import { ffiLibrary as ffiLibraryEmulador } from '../../../utils/SAT_Library_Emulador';
import { UTF8 } from '../../../utils/UTF8_Decode';
import { ModelConfigurarInterfaceRede } from '../../model/acoes/configurar_interface_rede/Configurar_Interface_Rede';
import { ModelConfigurarInterfaceRedeDadosConfiguracao } from '../../model/acoes/configurar_interface_rede/Configurar_Interface_Rede_Dados_Configuracao';

export const configurarInterfaceRede: (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_dadosConfiguracao: ModelConfigurarInterfaceRedeDadosConfiguracao
) => Promise<ModelConfigurarInterfaceRede> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_dadosConfiguracao: ModelConfigurarInterfaceRedeDadosConfiguracao
): Promise<ModelConfigurarInterfaceRede> {
	return new Promise<ModelConfigurarInterfaceRede>((resolve, reject) => {
		try {
			ffiLibrary.ConfigurarInterfaceDeRede.async(
				_numeroSessao,
				_codigoAtivacao,
				_dadosConfiguracao.toXML(),
				(error, resultConfigurarInterfaceRede) => {
					if (error) {
						throw new Error(error);
					}

					resultConfigurarInterfaceRede = UTF8.decode(resultConfigurarInterfaceRede as string);
					const _configurarInterfaceRede = new ModelConfigurarInterfaceRede();
					_configurarInterfaceRede.fromArray(resultConfigurarInterfaceRede.split('|'));
					resolve(_configurarInterfaceRede);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};

export const configurarInterfaceRedeEmulador: (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_dadosConfiguracao: ModelConfigurarInterfaceRedeDadosConfiguracao
) => Promise<ModelConfigurarInterfaceRede> = async function (
	_numeroSessao: number,
	_codigoAtivacao: string,
	_dadosConfiguracao: ModelConfigurarInterfaceRedeDadosConfiguracao
): Promise<ModelConfigurarInterfaceRede> {
	return new Promise<ModelConfigurarInterfaceRede>((resolve, reject) => {
		try {
			ffiLibraryEmulador.ConfigurarInterfaceDeRede.async(
				_numeroSessao,
				_codigoAtivacao,
				_dadosConfiguracao.toXML(),
				(error, resultConfigurarInterfaceRede) => {
					if (error) {
						throw new Error(error);
					}

					resultConfigurarInterfaceRede = UTF8.decode(resultConfigurarInterfaceRede as string);
					const _configurarInterfaceRede = new ModelConfigurarInterfaceRede();
					_configurarInterfaceRede.fromArray(resultConfigurarInterfaceRede.split('|'));
					resolve(_configurarInterfaceRede);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};
