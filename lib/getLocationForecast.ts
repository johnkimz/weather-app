export async function getLocationForecast(lat: number, lng: number) {
	const _lat = encodeURIComponent(lat);
	const _lng = encodeURIComponent(lng);
	const res = await fetch(`http://localhost:3000/api/forecast/${_lat}/${_lng}`);
	const resData = await res.json();
	return resData?.data;
}
