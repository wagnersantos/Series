import React, {Component} from 'react';

class Series extends Component{
	constructor(props){
		super(props);
		this.state ={
			series: []
		}
	}	
	render(){
		return (
			<div>
				<input type='text' placeholder ='Digite uma série' />		
			</div>
		)
	}
}

export default Series;