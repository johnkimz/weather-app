export function randomInteger(low: number, high: number) {
	const min = Math.ceil(low);
	const max = Math.floor(high);
	return Math.floor(Math.random() * (max - min) + min);
}
