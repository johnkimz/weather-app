'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { CONSTANTS } from '@/app/constants';
import Cookies from 'js-cookie';

const AddLocationButton = () => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	function onClick() {
		const prevCookie = Cookies.get('locations');
		const prevValues = prevCookie?.split?.('|') || [];
		const nextValues = ['123,123', ...prevValues];
		console.log(nextValues);
		const nextCookie = nextValues.join('|');
		Cookies.set('locations', nextCookie);

		startTransition(() => {
			router.refresh();
		});
	}

	return <button onClick={onClick}>ADD</button>;
};

export default AddLocationButton;
