export interface ITemperatureForecast {
	degrees: number;
	time: string;
}

export interface IWeatherForecast {
	temp: {
		hourly: ITemperatureForecast[];
		high: number;
		low: number;
	};
	weather: 'cloudy' | 'rain' | 'sunny';
}

export const data = {
	temp: {
		hourly: [
			{ degrees: 56, time: '12:00pm' },
			{ degrees: 59, time: '1:00pm' },
			{ degrees: 61, time: '2:00pm' },
			{ degrees: 64, time: '3:00pm' },
			{ degrees: 64, time: '4:00pm' },
			{ degrees: 63, time: '5:00pm' },
			{ degrees: 61, time: '6:00pm' },
			{ degrees: 60, time: '7:00pm' },
			{ degrees: 57, time: '8:00pm' },
			{ degrees: 56, time: '9:00pm' },
			{ degrees: 56, time: '10:00pm' },
			{ degrees: 55, time: '11:00pm' },
		],
		high: 63,
		low: 55,
	},
	weather: 'cloudy',
};
