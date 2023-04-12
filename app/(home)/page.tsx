import styles from './page.module.css';
import LocationSelect from '@/components/LocationSelect';
import WeatherCardsList from '@/components/WeatherCardsList';
import TemperatureUnitToggle from '@/components/TemperatureUnitToggle';
import { TemperatureUnitProvider } from '@/components/TemperatureUnitToggle/context';

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.content}>
				<LocationSelect />
				<TemperatureUnitProvider>
					<TemperatureUnitToggle />
					<WeatherCardsList />
				</TemperatureUnitProvider>
			</section>
		</main>
	);
}
