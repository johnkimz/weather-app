'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Svg from '@/components/Svg';
import { removeLocation } from '@/lib/cookieActions';
import Cookies from 'js-cookie';
import styles from './styles.module.css';

const WeatherCardActions = ({ index }) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	function onRemove() {
		const prevCookie = Cookies.get('locations');
		Cookies.set('locations', removeLocation(prevCookie, index));

		startTransition(() => {
			router.refresh();
		});
	}

	return (
		<button className={styles.remove} onClick={onRemove}>
			<Svg use="#g-svg-close" />
		</button>
	);
};

export default WeatherCardActions;
