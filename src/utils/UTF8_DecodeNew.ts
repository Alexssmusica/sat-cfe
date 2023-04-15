export const UTF8 = {
	encode: (s: string): string => {
		if (!s) return '';

		return s
			.split('')
			.map((char) => char.charCodeAt(0))
			.map((code) => (code >= 127 ? [0xc0 | (code >>> 6), 0x80 | (code & 0x3f)] : [code]))
			.reduce((acc, codes) => acc + String.fromCharCode(...codes), '');
	},

	decode: (s: string): string => {
		if (!s) return '';

		return s.split('').reduce(
			({ acc, buffer }: { acc: string; buffer: number[] }, char: string) => {
				const code = char.charCodeAt(0);
				if (code & 0x80) {
					if (!buffer.length) buffer.push(code);
					else if ((buffer[0] & 0xc0) == 0xc0 && (code & 0xc0) == 0x80) buffer.push(code);
					else {
						acc += String.fromCharCode(((buffer[0] & 0x03) << 6) | (buffer[1] & 0x3f));
						buffer = [code];
					}
				} else {
					if (buffer.length) {
						acc += String.fromCharCode(((buffer[0] & 0x03) << 6) | (buffer[1] & 0x3f));
						buffer = [];
					}
					acc += char;
				}
				return { acc, buffer };
			},
			{ acc: '', buffer: [] }
		).acc;
	}
};
