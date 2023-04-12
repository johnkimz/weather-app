'use client';

import { useTemperatureUnit } from './context';
import { CONSTANTS } from '@/app/constants';
import styles from './styles.module.css';

const TemperatureUnitToggle = () => {
	const { unit, onToggle } = useTemperatureUnit();
	return (
		<div className={styles.toggle}>
			<span className={styles.label}>&deg;F</span>
			<label className={styles.toggler}>
				<input
					type="checkbox"
					checked={unit === CONSTANTS.UNIT_C}
					onChange={() =>
						onToggle(
							unit === CONSTANTS.UNIT_C ? CONSTANTS.UNIT_F : CONSTANTS.UNIT_C
						)
					}
				/>
				<span className={styles.slider} />
			</label>
			<span className={styles.label}>&deg;C</span>
		</div>
	);
};

export default TemperatureUnitToggle;
