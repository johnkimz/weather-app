import { NextRequest, NextResponse } from 'next/server';
import { MOCK_DATA_LOCATIONS } from '@/app/api/mockData';

export async function GET(request: NextRequest) {
	const data = MOCK_DATA_LOCATIONS.map((item) => item.location);
	return NextResponse.json({ data });
}
