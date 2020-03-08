export function selectBook (book) {
	//this action creator need to return an object with type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}