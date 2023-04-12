import Svg from '@/components/Svg';
import styles from './styles.module.css';

interface IIcon {
	type: 'cloudy' | 'rain' | 'sunny';
}

const WeatherCardIcon = ({ type }: IIcon) => {
	let icon = '';

	switch (type) {
		case 'cloudy':
			icon = '#g-svg-cloud';
			break;
		case 'rain':
			icon = '#g-svg-rain';
			break;
		case 'sunny':
			icon = '#g-svg-sun';
			break;
	}

	return icon ? <Svg use={icon} className={styles[type]} /> : null;
};

export default WeatherCardIcon;
