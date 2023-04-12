import { NextRequest, NextResponse } from 'next/server';
import { MOCK_DATA_LOCATIONS } from '@/api/mockData';

interface IParams {
	location: string;
}

interface ICoordinatLocation {
	location: string;
	lat: string;
	lng: string;
}

export async function GET(
	request: NextRequest,
	{
		params,
	}: {
		params: IParams;
	}
) {
	try {
		const location = decodeURIComponent(params.location);

		if (!location) {
			return new Response('Missing Coordinate Location', { status: 404 });
		}

		const coordinates: ICoordinatLocation = MOCK_DATA_LOCATIONS.find(
			(item) => item.location === location
		);

		if (coordinates) {
			return NextResponse.json({ data: coordinates });
		}

		return new Response('Sorry, we are able to find that location', {
			status: 400,
		});
	} catch (err) {
		return new Response('Error handling coordinates location', { status: 500 });
	}
}
