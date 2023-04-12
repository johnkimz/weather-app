'use client';

import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/app/constants';
import { getCelsius } from '@/lib/temperature';
import { useTemperatureUnit } from '@/components/TemperatureUnitToggle/context';
import styles from './styles.module.css';

interface ITemp {
	className?: string;
	temp: number;
}

const WeatherCardTemp = ({ className, temp }: ITemp) => {
	const [tempDisplay, setTempDisplay] = useState('');
	const { unit } = useTemperatureUnit();

	useEffect(() => {
		const _temp = unit === CONSTANTS.UNIT_C ? getCelsius(temp) : temp;
		setTempDisplay(_temp);
	}, [unit]);

	return (
		<span className={styles.temp}>
			{tempDisplay}
			{tempDisplay && <>&deg;</>}
		</span>
	);
};

export default WeatherCardTemp;
