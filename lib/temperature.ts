export function getCelsius(deg: number) {
	return Math.round(((deg - 32) * 5) / 9);
}
