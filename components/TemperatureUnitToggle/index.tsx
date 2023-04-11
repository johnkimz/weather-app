'use client';

import { useTemperatureUnit, UNIT_F, UNIT_C } from './context';
import styles from './styles.module.css';

const TemperatureUnitToggle = () => {
	const { unit, onToggle } = useTemperatureUnit();

	return (
		<aside>
			<button
				className={unit === UNIT_F ? styles.selected : ''}
				onClick={() => onToggle(UNIT_F)}
			>
				&deg; F
			</button>
			<button
				className={unit === UNIT_C ? styles.selected : ''}
				onClick={() => onToggle(UNIT_C)}
			>
				&deg; C
			</button>
		</aside>
	);
};

export default TemperatureUnitToggle;
