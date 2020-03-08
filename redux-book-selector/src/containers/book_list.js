import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
	
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
				key={book.title} 
				className="list-group-item"
				onClick={() => {this.props.selectBook(book)}}>
				{book.title}
				</li>
			);
		});
	}


	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	//Whatever is returned will show up as props for BookList
	return {
		books: state.books
	};
}

//Anything returned by this function will end as a props on the Booklist container
function mapDispatchToProps(dispatch) {
	//Whenever  selectbook is called, pass the result to all the reducers
	return bindActionCreators({ selectBook: selectBook},dispatch);
}
//Promote the component to a container and bind the actions and some state as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);