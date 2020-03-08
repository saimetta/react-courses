import _ from 'lodash';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


//Create the component
class App extends Component {

	constructor (props) {
		super(props);

		this.state = {
			items : [],
		};

	}

	addItem () {
		this.setState({items: [{name: 'This is the item: '+this.state.items.length},...this.state.items]});
	}

	renderItems () {
		return this.state.items.map((item,index) => {
			return <li className="list-grup-item col-md-8" key={index}>
				<span className="col-md-8">{item.name}</span>
				<button className="btn btn-danger col-md-2" onClick={this.removeItem.bind(this)} value={index}>Remove</button>
			</li>
		});
	}

	removeItem(event) {
		const id = event.currentTarget.value;
		this.state.items.splice(id,1);
		this.setState({items: this.state.items});
	}


	render () {
		const transitionOptions = {
			transitionName: "fade",
			transitionEnterTimeout: 500,
			transitionLeaveTimeout: 500
		};
		return (
			<div className="col-md-10">
				<h1>Animations</h1>
				<button className="btn btn-primary" onClick={this.addItem.bind(this)}>Add</button>
				<ul className="list-group">
					<ReactCSSTransitionGroup {...transitionOptions}>
						{this.renderItems()}
					</ReactCSSTransitionGroup>
				</ul>
			</div>
		);
	}
}


//Render the component in the DOM
ReactDOM.render(<App />,document.querySelector('.container'));
