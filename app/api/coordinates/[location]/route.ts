import { data, ICoordinatLocation } from './data';
import { NextRequest, NextResponse } from 'next/server';

interface IParams {
	location: string;
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
		const location = params.location;

		if (!location) {
			return new Response('Missing Coordinate Location', { status: 400 });
		}

		const coordinates = data[location];

		if (coordinates) {
			return NextResponse.json({ data: coordinates });
		}

		return new Response('Sorry, we are able to find that location', {
			status: 400,
		});
	} catch (err) {
		return new Response('Error handling ', { status: 500 });
	}
}
