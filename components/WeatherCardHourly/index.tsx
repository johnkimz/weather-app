'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import WeatherCardTemp from '@/components/WeatherCardTemp';
import styles from './styles.module.css';

interface ITemperatureForecast {
	degrees: number;
	time: string;
}

interface IHourly {
	hourly: ITemperatureForecast[];
}

const WeatherCardHourly = (props: IHourly) => {
	const { hourly } = props;
	const [show, setShow] = useState(false);

	return (
		<aside className={styles.hourly}>
			<Button className={styles.btn} type="icon" onClick={() => setShow(!show)}>
				{`${show ? 'Hide' : 'See'} hourly forecast`}
			</Button>
			{show && (
				<ul className={styles.list}>
					{hourly?.map((item) => (
						<li key={item?.time} className={styles.listitem}>
							<span className={styles.time}>{item?.time}</span>
							<WeatherCardTemp temp={item?.degrees} />
						</li>
					))}
				</ul>
			)}
		</aside>
	);
};

export default WeatherCardHourly;
