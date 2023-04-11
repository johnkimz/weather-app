import WeatherCardTemp from '@/components/WeatherCardTemp';
import WeatherCardIcon from '@/components/WeatherCardIcon';
import WeatherCardActions from '@/components/WeatherCardActions';
import styles from './styles.module.css';

interface IWeatherCard {
	index: number;
	lat: number;
	lng: number;
}

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

const WeatherCard = async ({ lat, lng, index }: IWeatherCard) => {
	const forecast = await getForecast(lat, lng);

	return (
		<section>
			<WeatherCardActions index={index} />
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
