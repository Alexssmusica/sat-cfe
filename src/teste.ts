import * as path from 'path';
import { SATEmulador as SAT } from './SAT/SAT_Emulador';

async function test() {
	const caminho = path.resolve('SAT.dll');
	const sat = new SAT(caminho, 'jclan3411');
	const { _numeroSessao } = await sat.geraNumeroSessao();
	// const retorno = await sat.enviarDadosVenda(
	// 	_numeroSessao,
	// 	'<CFe><infCFe versaoDadosEnt="0.02"><ide><CNPJ>11111111111111</CNPJ><signAC>hdj2552244122223335dddd44444d444d4wq4dwddsa4d444d4sa4d4asd44a4444d4sa4d4asd4cscsacsdcdscdsc366sc6s3c3sdc63c3c63c3sd3c3sdc3ds6c3ds3c3dsc3333333333333333cds3c3ds3c3sdc3ds3c3sdc3dsc3ds3c3dsc33ds3cds3c3ds3cc3ds3c3c3ds3c3dsc3ds3c3cds3c3dscc3ds3c3sd3c3c3dsc3ds3c3dsc3ds3cds3c3sdc3sd3c3sdc3sc6sd6cs6dc6sdc6s6c6sdc6sd6c6sdc6sc6sd6csd6c6ds6csd6c66c6ddc</signAC><numeroCaixa>002</numeroCaixa></ide><emit><CNPJ>11111111111111</CNPJ><IE>111111111111</IE><IM>123123</IM><indRatISSQN>N</indRatISSQN></emit><dest></dest><det nItem="1"><prod><cProd>0001</cProd><cEAN>0012345678905</cEAN><xProd>Trib ICMS Integral Aliquota 10.00% - PIS e COFINS cod 08 sem incidencia </xProd><NCM>41</NCM><CFOP>5001</CFOP><uCom>kg</uCom><qCom>1.0000</qCom><vUnCom>100.00</vUnCom><indRegra>A</indRegra></prod><imposto><vItem12741>1.00</vItem12741><ICMS><ICMS00><Orig>0</Orig><CST>00</CST><pICMS>10.00</pICMS></ICMS00></ICMS><PIS><PISNT><CST>08</CST></PISNT></PIS><COFINS><COFINSNT><CST>08</CST></COFINSNT></COFINS></imposto></det><total></total><pgto><MP><cMP>01</cMP><vMP>100.00</vMP></MP></pgto></infCFe></CFe>'
	// );
	// const retorno = await sat.cancelarUltimaVenda(
	// 	_numeroSessao,
	// 	'CFe35230411111111111111591234567890000496171506',
	// 	'<CFeCanc><infCFe chCanc="CFe35230411111111111111591234567890000496171506"><ide><CNPJ>11111111111111</CNPJ><signAC>hdj2552244122223335dddd44444d444d4wq4dwddsa4d444d4sa4d4asd44a4444d4sa4d4asd4cscsacsdcdscdsc366sc6s3c3sdc63c3c63c3sd3c3sdc3ds6c3ds3c3dsc3333333333333333cds3c3ds3c3sdc3ds3c3sdc3dsc3ds3c3dsc33ds3cds3c3ds3cc3ds3c3c3ds3c3dsc3ds3c3cds3c3dscc3ds3c3sd3c3c3dsc3ds3c3dsc3ds3cds3c3sdc3sd3c3sdc3sc6sd6cs6dc6sdc6s6c6sdc6sd6c6sdc6sc6sd6csd6c6ds6csd6c66c6ddc</signAC><numeroCaixa>001</numeroCaixa></ide><emit/><dest></dest><total/></infCFe></CFeCanc>'
	// );
	// const retorno = await sat.extrairLogs(sessao);
	const retorno = await sat.consultarSAT(_numeroSessao);
	// const retorno = await sat.versaoLib();
	// const retorno = await sat.geraNumeroSessao();
	console.log(retorno);
}

test();
