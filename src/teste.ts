import { SAT } from './SAT/SAT';
import * as path from 'path';

async function test() {
	const caminho = path.resolve('SAT_x86_BEMATECH.dll');
	const sat = new SAT(caminho, 'jclan3411');
	const sessao = Math.floor(Math.random() * 999999);
	const retorno = await sat.consultarSAT(sessao);
	console.log(retorno);
}

test();
