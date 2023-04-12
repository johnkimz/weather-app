'use client';

import React, { useState } from 'react';
import { CONSTANTS } from '@/app/constants';
import Cookies from 'js-cookie';

const TemperatureUnitContext = React.createContext<
	{ unit: string; onToggle: (nextUnit: string) => void } | undefined
>(undefined);

export function TemperatureUnitProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [unit, setUnit] = useState(
		Cookies.get(CONSTANTS.TEMPERATURE_UNIT_COOKIE) || CONSTANTS.UNIT_F
	);

	function onToggle(nextUnit: string) {
		if (nextUnit !== unit) {
			setUnit(nextUnit);
			Cookies.set(CONSTANTS.TEMPERATURE_UNIT_COOKIE, nextUnit);
		}
	}

	return (
		<TemperatureUnitContext.Provider value={{ unit, onToggle }}>
			{children}
		</TemperatureUnitContext.Provider>
	);
}

export function useTemperatureUnit() {
	const context = React.useContext(TemperatureUnitContext);

	if (context === undefined) {
		throw new Error(
			'useTemperatureUnit must be used within a TemperatureUnitProvider'
		);
	}
	return context;
}
