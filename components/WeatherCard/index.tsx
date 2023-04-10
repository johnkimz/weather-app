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
			<div>{`High: ${forecast?.temp?.high}`}</div>
			<div>{`Low: ${forecast?.temp?.low}`}</div>
			<div>{forecast?.weather}</div>
		</section>
	);
};

export default WeatherCard;
