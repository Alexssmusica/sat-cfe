import { ForeignFunction, Library } from '@breush/ffi-napi';

export let ffiLibrary: FFiLibraryArgs;

export const SATLibrary: (_libraryPath: string) => any = function (_libraryPath: string) {
	ffiLibrary = new Library(_libraryPath, {
		AtivarSAT: ['string', ['int', 'int', 'string', 'string', 'int']],
		ComunicarCertificadoICPBRASIL: ['string', ['int', 'string', 'string']],
		EnviarDadosVenda: ['string', ['int', 'string', 'string']],
		CancelarUltimaVenda: ['string', ['int', 'string', 'string', 'string']],
		ConsultarSAT: ['string', ['int']],
		TesteFimAFim: ['string', ['int', 'string', 'string']],
		ConsultarStatusOperacional: ['string', ['int', 'string']],
		ConsultarNumeroSessao: ['string', ['int', 'string', 'int']],
		ConfigurarInterfaceDeRede: ['string', ['int', 'string', 'string']],
		AssociarAssinatura: ['string', ['int', 'string', 'string', 'string']],
		VersaoLib: ['string', []],
		GeraNumeroSessao: ['int', []],
		AtualizarSoftwareSAT: ['string', ['int', 'string']],
		ExtrairLogs: ['string', ['int', 'string']],
		BloquearSAT: ['string', ['int', 'string']],
		DesbloquearSAT: ['string', ['int', 'string']],
		TrocarCodigoDeAtivacao: ['string', ['int', 'string', 'int', 'string', 'string']]
	});
};

export interface FFiLibraryArgs {
	AtivarSAT: ForeignFunction<string | null, [number, number, string | null, string | null, number]>;
	ComunicarCertificadoICPBRASIL: ForeignFunction<string | null, [number, string | null, string | null]>;
	EnviarDadosVenda: ForeignFunction<string | null, [number, string | null, string | null]>;
	CancelarUltimaVenda: ForeignFunction<string | null, [number, string | null, string | null, string | null]>;
	ConsultarSAT: ForeignFunction<string | null, [number]>;
	TesteFimAFim: ForeignFunction<string | null, [number, string | null, string | null]>;
	ConsultarStatusOperacional: ForeignFunction<string | null, [number, string | null]>;
	VersaoLib: ForeignFunction<string | null>;
	GeraNumeroSessao: ForeignFunction<number>;
	ConsultarNumeroSessao: ForeignFunction<string | null, [number, string | null, number]>;
	ConfigurarInterfaceDeRede: ForeignFunction<string | null, [number, string | null, string | null]>;
	AssociarAssinatura: ForeignFunction<string | null, [number, string | null, string | null, string | null]>;
	AtualizarSoftwareSAT: ForeignFunction<string | null, [number, string | null]>;
	ExtrairLogs: ForeignFunction<string | null, [number, string | null]>;
	BloquearSAT: ForeignFunction<string | null, [number, string | null]>;
	DesbloquearSAT: ForeignFunction<string | null, [number, string | null]>;
	TrocarCodigoDeAtivacao: ForeignFunction<string | null, [number, string | null, number, string | null, string | null]>;
}
