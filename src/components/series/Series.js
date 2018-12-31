import React, {Component} from 'react';

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