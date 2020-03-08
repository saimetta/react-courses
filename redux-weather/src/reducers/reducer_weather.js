import { FETCH_WEATHER } from '../actions/index';


export default function (state = [], action) {
	switch(action.type) {
	case FETCH_WEATHER: 
		//NEVER MANIPULATE STATE state.push(action.payload.data) NOOO!!!
		return [ action.payload.data,...state]; //ES6 state.concat([ action.payload.data ]);
	}
	return state;
}