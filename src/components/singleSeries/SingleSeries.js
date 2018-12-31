import React, {Component} from 'react';
import SeriesData from '../../services/seriesData/SeriesData';

class SingleSeries extends Component {
	constructor(props){
		super(props);
		this.state ={
			show: null
		}
	}
	componentDidMount(){
		SeriesData.getSeriesById(this.props)
      		.then(response => response.json())
      		.then(json => this.setState({show: json}));
	}
	render(){
		return (
			
		)
	}
}

export default SingleSeries;