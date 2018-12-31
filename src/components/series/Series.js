import React, {Component} from 'react';
import SeriesData from '../../services/seriesData/SeriesData';

class Series extends Component{
	constructor(props){
		super(props);
		this.state ={
			series : [],
			seriesName : ''
		}
		this.onSeriesInputChange = this.onSeriesInputChange.bind(this);
	}
	onSeriesInputChange(e){
		this.setState({seriesName: e.target.value});
		SeriesData.getSeriesByName(e.target.value)
			.then(response => response.json())
      		.then(json => this.setState({series: json}));
	}	
	render(){
		const {series,seriesName} = this.state;
		return (
			<div>
				<input type='text' placeholder ='Digite uma série' value={seriesName} 
					onChange={this.onSeriesInputChange} />		
			</div>
		)
	}
}

export default Series;