import axios from 'axios';

export const FETCH_PROFILES = 'fetch_profiles';


export function fetchProfiles(n) {
  const request = axios.get(`https://randomuser.me/api/?results=${n}`);
  return {
    type: FETCH_PROFILES,
    payload: request
  };
}
