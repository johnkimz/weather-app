import WeatherCardTemp from '@/components/WeatherCardTemp';
import WeatherCardHourly from '@/components/WeatherCardHourly';
import WeatherCardIcon from '@/components/WeatherCardIcon';
import WeatherCardActions from '@/components/WeatherCardActions';
import styles from './styles.module.css';

interface IWeatherCard {
	index: number;
	lat: number;
	lng: number;
	location: string;
}

async function getForecast(lat: number, lng: number) {
	const res = await fetch(
		`http://localhost:3000/api/forecast/${lat}/${lng}`
	).then((res) => res.json());

	if (res?.data) {
		return res.data;
	}

	return {};
}

const WeatherCard = async ({ lat, lng, index }: IWeatherCard) => {
	const forecast = await getForecast(lat, lng);

	return (
		<section className={styles.card}>
			<WeatherCardActions className={styles.actions} index={index} />
			<h2>{forecast?.location}</h2>
			<div className={styles.meta}>
				<WeatherCardIcon className={styles.icon} type={forecast?.weather} />
				<div className={styles.temps}>
					<div>
						High: <WeatherCardTemp temp={forecast?.temp?.high} />
					</div>
					<div>
						Low: <WeatherCardTemp temp={forecast?.temp?.low} />
					</div>
				</div>
			</div>
			<WeatherCardHourly hourly={forecast?.temp?.hourly} />
		</section>
	);
};

export default WeatherCard;
