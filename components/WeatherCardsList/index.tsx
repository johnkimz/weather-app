import { Suspense } from 'react';
import { cookies } from 'next/headers';
import WeatherCard from '@/components/WeatherCard';
import { getLocations } from '@/lib/cookieActions';

export const WEATHER_CARDS_COOKIE = 'locations';

interface ILocation {
	hash: string;
	index: number;
	lat: number;
	lng: number;
}

const WeatherCardsList = () => {
	try {
		const locationsCookie = cookies().get(WEATHER_CARDS_COOKIE);
		const { name, value } = locationsCookie || {};
		const locations = getLocations(value);

		return (
			<ul>
				{locations.map((loc: ILocation, index: number) => (
					<WeatherCard
						key={loc?.hash}
						lat={loc?.lat}
						lng={loc?.lng}
						index={index}
					/>
				))}
			</ul>
		);
	} catch (err) {
		console.error(`Error parsing '${WEATHER_CARDS_COOKIE}' cookie`, err);
	}

	return null;
};

export default WeatherCardsList;
