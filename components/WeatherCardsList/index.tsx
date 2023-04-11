import { Suspense } from 'react';
import { cookies } from 'next/headers';
import WeatherCard from '@/components/WeatherCard';

export const WEATHER_CARDS_COOKIE = 'weatherLoc';

const WeatherCardsList = () => {
	try {
		const locationsCookie = cookies().get(WEATHER_CARDS_COOKIE);
		const { name, value } = locationsCookie || {};

		if (value) {
			const locations = value?.split?.('|');

			return locations?.reduce?.((acc, item) => {
				const coordinates = item?.split?.(',');
				const [lat, lng] = coordinates;

				const _lat = Number(lat);
				const _lng = Number(lng);

				if (!isNaN(_lng) && !isNaN(_lat)) {
					acc.push(<WeatherCard lat={lat} lng={lng} key={coordinates} />);
				}

				return acc;
			}, []);
		}
	} catch (err) {
		console.error(`Error parsing '${WEATHER_CARDS_COOKIE}' cookie`, err);
	}

	return null;
};

export default WeatherCardsList;
