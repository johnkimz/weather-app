interface ILocation {
	hash?: string;
	lat: number;
	lng: number;
}

export function getLocations(value: string) {
	if (value) {
		const locations = value?.split?.('|');

		return locations?.reduce?.((acc, item) => {
			const decodeCoordinates = decodeURI(item);
			const coordinates = decodeCoordinates?.split?.(',');
			const [lat, lng] = coordinates;

			const _lat = Number(lat);
			const _lng = Number(lng);

			if (!isNaN(_lng) && !isNaN(_lat)) {
				acc.push({
					hash: coordinates,
					lat: _lat,
					lng: _lng,
				});
			}

			return acc;
		}, []);
	}

	return [];
}

export function addLocation(value: string, { lat, lng }: ILocation) {
	if (value) {
		const newValue = encodeURI(`${lat},${lng}`);
		return `${newValue}|${value}`;
	}

	return '';
}

export function removeLocation(value: string, index: number = 0) {
	if (value) {
		const locations = value?.split?.('|');
		locations.splice(index, 1);
		return locations.join('|');
	}

	return '';
}
