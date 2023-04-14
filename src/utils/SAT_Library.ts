import * as ffi from 'ffi-napi';

export let ffiLibrary: { AtivarSAT: ffi.ForeignFunction<string , [number, number, string | null, string | null, number]>; ComunicarCertificadoICPBRASIL: ffi.ForeignFunction<string | null, [number, string | null, string | null]>; EnviarDadosVenda: ffi.ForeignFunction<string | null, [number, string | null, string | null]>; CancelarUltimaVenda: ffi.ForeignFunction<string | null, [number, string | null, string | null, string | null]>; ConsultarSAT: ffi.ForeignFunction<string | null, [number]>; TesteFimAFim: ffi.ForeignFunction<string | null, [number, string | null, string | null]>; ConsultarStatusOperacional: ffi.ForeignFunction<string | null, [number, string | null]>; ConsultarNumeroSessao: ffi.ForeignFunction<string | null, [number, string | null, number]>; ConfigurarInterfaceDeRede: ffi.ForeignFunction<string | null, [number, string | null, string | null]>; AssociarAssinatura: ffi.ForeignFunction<string | null, [number, string | null, string | null, string | null]>; AtualizarSoftwareSAT: ffi.ForeignFunction<string | null, [number, string | null]>; ExtrairLogs: ffi.ForeignFunction<string | null, [number, string | null]>; BloquearSAT: ffi.ForeignFunction<string | null, [number, string | null]>; DesbloquearSAT: ffi.ForeignFunction<string | null, [number, string | null]>; TrocarCodigoDeAtivacao: ffi.ForeignFunction<string | null, [number, string | null, number, string | null, string | null]>; };

export const SATLibrary: (_libraryPath: string) => any = function (_libraryPath: string) {
	ffiLibrary = new ffi.Library(_libraryPath, {
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
		AtualizarSoftwareSAT: ['string', ['int', 'string']],
		ExtrairLogs: ['string', ['int', 'string']],
		BloquearSAT: ['string', ['int', 'string']],
		DesbloquearSAT: ['string', ['int', 'string']],
		TrocarCodigoDeAtivacao: ['string', ['int', 'string', 'int', 'string', 'string']]
	});
};
