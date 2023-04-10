import { NextRequest, NextResponse } from 'next/server';
import { data, IWeatherForecast } from '@/api/forecast/[lat]/[lng]/data';

interface IParams {
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
	return NextResponse.json({ data });
}
