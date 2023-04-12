'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Svg from '@/components/Svg';
import Button from '@/components/Button';
import { removeLocation } from '@/lib/cookieActions';
import { CONSTANTS } from '@/app/constants';
import Cookies from 'js-cookie';
import styles from './styles.module.css';

const WeatherCardActions = ({ index }) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	function onRemove() {
		const prevCookie = Cookies.get(CONSTANTS.LOCATIONS_COOKIE);
		Cookies.set(CONSTANTS.LOCATIONS_COOKIE, removeLocation(prevCookie, index));

		startTransition(() => {
			router.refresh();
		});
	}

	return (
		<Button className={styles.remove} onClick={onRemove} type="icon">
			<Svg use="#g-svg-close" />
		</Button>
	);
};

export default WeatherCardActions;
