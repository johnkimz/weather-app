import WeatherCardTemp from '@/components/WeatherCardTemp';
import WeatherCardIcon from '@/components/WeatherCardIcon';
import styles from './styles.module.css';

async function getForecast(lat: number, lng: number) {
	const res = await fetch(
		`http://localhost:3000/api/forecast/${lat}/${lng}`
	).then((res) => res.json());

	if (res?.data) {
		return res.data;
	}

	// TODO : throw error
	return {};
}

const WeatherCard = async ({ location = 'New York', lat = 111, lng = 222 }) => {
	const forecast = await getForecast(lat, lng);

	return (
		<section>
			<h2>{location}</h2>
			<WeatherCardIcon type={forecast?.weather} />
			<div>{forecast?.weather}</div>
			<div>
				High: <WeatherCardTemp temp={forecast?.temp?.high} />
			</div>
			<div>
				Low: <WeatherCardTemp temp={forecast?.temp?.low} />
			</div>
		</section>
	);
};

export default WeatherCard;
