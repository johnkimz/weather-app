export function delay(time: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(1);
		}, time);
	});
}

export function convertFahrenheitToCelsius(deg: number) {
	return Math.round(((deg - 32) * 5) / 9);
}
