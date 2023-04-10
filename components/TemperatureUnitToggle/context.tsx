'use client';

import React, { useState } from 'react';
import Cookies from 'js-cookie';

export const UNIT_F = 'fahrenheit';
export const UNIT_C = 'celsius';
export const TemperatureUnitCookie = 'temperatureUnit';

const TemperatureUnitContext = React.createContext<
	{ unit: string; onToggle: (nextUnit: string) => void } | undefined
>(undefined);

export function TemperatureUnitProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [unit, setUnit] = useState(
		Cookies.get(TemperatureUnitCookie) || UNIT_F
	);

	function onToggle(nextUnit: string) {
		if (nextUnit !== unit) {
			setUnit(nextUnit);
			Cookies.set(TemperatureUnitCookie, nextUnit);
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
