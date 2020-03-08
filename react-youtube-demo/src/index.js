import _ from 'lodash';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

//Youtube API key
const API_KEY = 'AIzaSyDd7m0DuvZQi2SGOt_Yj2ykjzx6SSf3Il8';



//Create the component
class App extends Component {
	
	constructor (props) {
		super(props);
		
		this.state = {
			videos : [],
			selectedVideo: null
		};

		this.videoSearch('How to ollie');

	}

	videoSearch (term) {
		//Calls youtube search api and put the videos on the state
		YTSearch({key: API_KEY,term: term},videos => {
			this.setState({ 
				videos : videos,
				selectedVideo : videos[0]
			 });
 		});
	}

	render () {

		const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} 
				/>
			</div>
		);
	}
}


//Render the component in the DOM
ReactDOM.render(<App />,document.querySelector('.container'));