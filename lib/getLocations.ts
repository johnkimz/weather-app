export async function getLocations() {
	const res = await fetch(`http://localhost:3000/api/locations`);
	const resData = await res.json();
	return resData?.data;
}
