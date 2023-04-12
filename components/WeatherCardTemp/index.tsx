'use client';

import { CONSTANTS } from '@/app/constants';
import { getCelsius } from '@/lib/temperature';
import { useTemperatureUnit } from '@/components/TemperatureUnitToggle/context';
import styles from './styles.module.css';

interface ITemp {
	className?: string;
	temp: number;
}

const WeatherCardTemp = ({ className, temp }: ITemp) => {
	const { unit } = useTemperatureUnit();

	return (
		<span className={className}>
			{unit === CONSTANTS.UNIT_C ? getCelsius(temp) : temp}
		</span>
	);
};

export default WeatherCardTemp;
