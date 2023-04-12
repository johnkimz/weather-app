import Svg from '@/components/Svg';
import TemperatureUnitToggle from '@/components/TemperatureUnitToggle';
import styles from './styles.module.css';

const Navigation = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.visuallyhidden} aria-hidden="true">
				Weather App
			</h1>
			<div className={styles.wrapper}>
				<nav className={styles.nav}>
					<Svg use="#g-svg-logo" className={styles.logo} />
					<TemperatureUnitToggle />
				</nav>
			</div>
		</header>
	);
};

export default Navigation;
