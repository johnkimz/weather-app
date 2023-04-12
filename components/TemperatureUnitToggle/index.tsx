'use client';

import { useTemperatureUnit } from './context';
import { CONSTANTS } from '@/app/constants';
import styles from './styles.module.css';

const TemperatureUnitToggle = () => {
	const { unit, onToggle } = useTemperatureUnit();
	return (
		<aside>
			<button
				className={unit === CONSTANTS.UNIT_F ? styles.selected : ''}
				onClick={() => onToggle(CONSTANTS.UNIT_F)}
			>
				&deg; F
			</button>
			<button
				className={unit === CONSTANTS.UNIT_C ? styles.selected : ''}
				onClick={() => onToggle(CONSTANTS.UNIT_C)}
			>
				&deg; C
			</button>
		</aside>
	);
};

export default TemperatureUnitToggle;
