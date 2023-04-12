import { NextRequest, NextResponse } from 'next/server';
import { MOCK_DATA_LOCATIONS, MOCK_DATA_TIMES } from '@/app/api/mockData';
import { randomInteger } from '@/lib/random';
import { delay } from '@/lib/delay';

interface IParams {
	lat: string;
	lng: string;
}

interface ITemperatureForecast {
	degrees: number;
	time: string;
}

interface IWeatherForecast {
	location: string;
	temp: {
		hourly: ITemperatureForecast[];
		high: number;
		low: number;
	};
	weather: 'cloudy' | 'rain' | 'sunny';
}

export async function GET(
	request: NextRequest,
	{
		params,
	}: {
		params: IParams;
	}
) {
	// await delay(5000);

	try {
		const lat = Number(params?.lat);
		const lng = Number(params?.lng);
		const locationData = MOCK_DATA_LOCATIONS.find(
			(item) => item.lat === lat && item.lng === lng
		);

		if (locationData) {
			const hourly = MOCK_DATA_TIMES.map((hour) => ({
				degree: randomInteger(45, 92),
				time: hour,
			}));

			const high = hourly.reduce((prev, next) =>
				prev.degree > next.degree ? prev : next
			);

			const low = hourly.reduce((prev, next) =>
				prev.degree < next.degree ? prev : next
			);

			const data = {
				location: locationData.location,
				temp: {
					hourly,
					high: high.degree,
					low: low.degree,
				},
				weather: ['cloudy', 'rain', 'sunny'][randomInteger(0, 2)],
			};

			return NextResponse.json({ data });
		}

		return new Response('Cannot find forecast', { status: 400 });
	} catch (err) {
		return new Response('Error handling forecast data', { status: 500 });
	}
}
