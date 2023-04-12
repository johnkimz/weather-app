import cn from 'classnames';
import Svg from '@/components/Svg';
import styles from './styles.module.css';

interface IIcon {
	className?: string;
	type: 'cloudy' | 'rain' | 'sunny';
}

const WeatherCardIcon = ({ className, type }: IIcon) => {
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

	return icon ? (
		<div className={cn(styles.icon, className)}>
			<Svg use={icon} className={styles[type]} />
			<div className={styles.caption}>{type}</div>
		</div>
	) : null;
};

export default WeatherCardIcon;
