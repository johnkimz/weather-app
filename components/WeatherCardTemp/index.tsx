'use client';
import {
	useTemperatureUnit,
	UNIT_F,
	UNIT_C,
} from '@/components/TemperatureUnitToggle/context';
import { getCelsius } from '@/lib/temperature';
import styles from './styles.module.css';

interface ITemp {
	className?: string;
	temp: number;
}

const WeatherCardTemp = ({ className, temp }: ITemp) => {
	const { unit } = useTemperatureUnit();

	return (
		<span className={className}>
			{unit === UNIT_C ? getCelsius(temp) : temp}
		</span>
	);
};

export default WeatherCardTemp;
