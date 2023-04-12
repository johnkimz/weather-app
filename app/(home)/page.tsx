import LocationSelect from '@/components/LocationSelect';
import WeatherCardsList from '@/components/WeatherCardsList';
import { TemperatureUnitProvider } from '@/components/TemperatureUnitToggle/context';
import Navigation from '@/components/Navigation';
import styles from './page.module.css';

export default function Home() {
	return (
		<TemperatureUnitProvider>
			<Navigation />
			<main className={styles.main}>
				<section className={styles.content}>
					<LocationSelect />
					<WeatherCardsList />
				</section>
			</main>
		</TemperatureUnitProvider>
	);
}
