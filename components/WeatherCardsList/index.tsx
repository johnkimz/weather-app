import { cookies } from 'next/headers';
import { CONSTANTS } from '@/app/constants';
import WeatherCard from '@/components/WeatherCard';
import { getLocations } from '@/lib/cookieActions';
import styles from './styles.module.css';

interface ILocation {
	hash: string;
	index: number;
	lat: number;
	lng: number;
}

const WeatherCardsList = () => {
	try {
		const locationsCookie = cookies().get(CONSTANTS.LOCATIONS_COOKIE);
		const { name, value } = locationsCookie || {};
		const locations = getLocations(value);

		return (
			<div className={styles.list}>
				{locations.map((loc: ILocation, index: number) => (
					<WeatherCard
						key={loc?.hash}
						lat={loc?.lat}
						lng={loc?.lng}
						index={index}
					/>
				))}
			</div>
		);
	} catch (err) {
		console.error(`Error parsing '${CONSTANTS.LOCATIONS_COOKIE}' cookie`, err);
	}

	return null;
};

export default WeatherCardsList;
