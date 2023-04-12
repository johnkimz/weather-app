export async function getLocationCoordinates(location: string) {
	const res = await fetch(
		`http://localhost:3000/api/coordinates/${encodeURIComponent(location)}`
	);
	const resData = await res.json();
	return resData?.data;
}
