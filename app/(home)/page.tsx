import styles from './page.module.css';
import WeatherCard from '@/components/WeatherCard';
import TemperatureUnitToggle from '@/components/TemperatureUnitToggle';
import { TemperatureUnitProvider } from '@/components/TemperatureUnitToggle/context';

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.content}>
				<TemperatureUnitProvider>
					<TemperatureUnitToggle />
					<WeatherCard />
				</TemperatureUnitProvider>
			</section>
		</main>
	);
}
