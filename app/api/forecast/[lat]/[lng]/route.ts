import { NextRequest, NextResponse } from 'next/server';
import { data, IWeatherForecast } from '@/api/forecast/[lat]/[lng]/data';
import { delay } from '@/lib/utils';

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
	await delay(5000);
	return NextResponse.json({ data });
}
