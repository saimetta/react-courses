import axios from 'axios';

const API_KEY = 'f1c6ecd32efc2e52c618f68a3141fd70';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city}`;
	//returns a promise
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
