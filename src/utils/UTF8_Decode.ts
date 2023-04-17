export const UTF8 = {
	decode: function (str: string | null): string {
		if (!str) return '';
		const encoder = new TextEncoder();
		const buffer = encoder.encode(str).buffer;
		const decoder = new TextDecoder('UTF8');
		return decoder.decode(buffer);
	}
};
