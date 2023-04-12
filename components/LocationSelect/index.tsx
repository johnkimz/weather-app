'use client';

import { useState, useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { getLocations } from '@/lib/getLocations';
import { getLocationCoordinates } from '@/lib/getLocationCoordinates';
import { addLocation } from '@/lib/cookieActions';
import Button from '@/components/Button';
import { CONSTANTS } from '@/app/constants';
import Cookies from 'js-cookie';
import styles from './styles.module.css';

const LocationSelect = () => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [locations, setLocations] = useState([]);
	const [selected, setSelected] = useState();

	useEffect(() => {
		getLocations().then((data) => {
			setLocations(data);
			setSelected(data?.[0]);
		});
	}, []);

	function onAdd() {
		if (selected) {
			getLocationCoordinates(selected).then((data) => {
				const { location, lat, lng } = data;
				const prevCookie = Cookies.get(CONSTANTS.LOCATIONS_COOKIE);

				Cookies.set(
					CONSTANTS.LOCATIONS_COOKIE,
					addLocation(prevCookie, { lat, lng })
				);

				startTransition(() => {
					router.refresh();
				});
			});
		}
	}

	return (
		<div className={styles.locationselect}>
			<select
				className={styles.select}
				value={selected}
				onChange={(e) => setSelected(e?.target?.value)}
			>
				{locations?.map?.((name) => (
					<option key={name}>{name}</option>
				))}
			</select>
			<Button onClick={onAdd}>Add</Button>
		</div>
	);
};

export default LocationSelect;
