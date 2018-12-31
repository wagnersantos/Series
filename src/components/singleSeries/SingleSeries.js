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
		const {show} = this.state;
		
		return (
			<div>
			{
				show !== null  
				&& 
				<div>
					<p>{show.name}</p>
					<p>Lançamento - {new Date(show.premiered).toLocaleDateString()}</p>
					<p>Pontuação - {show.rating.average}</p>
					<p>Episódios - {show._embedded.episodes.length}</p>
					<p>Temporadas - {show._embedded.episodes[show._embedded.episodes.length-1]
						.season}</p>
					<p>
						<img alt='show' src={show.image.medium} />
					</p>
					<p dangerouslySetInnerHTML={{__html: 
        				show.summary}}></p>
				</div>
			}
			</div>			
		)
	}
}

export default SingleSeries;