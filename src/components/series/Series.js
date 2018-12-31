import React, {Component} from 'react';
import SeriesList from '../../components/seriesList/SeriesList';
import Intro from '../../components/intro/Intro';
import Loader from '../../components/loader/Loader';

class Series extends Component{
	constructor(props){
		super(props);
		this.state ={
			series: [],
			seriesName: '',
			isFetching: false
		}
		this.onSeriesInputChange = this.onSeriesInputChange.bind(this);
	}
	onSeriesInputChange(e){
		this.setState({seriesName: e.target.value, isFetching: true});
		fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      		.then(response => response.json())
      		.then(json => this.setState({series: json, isFetching: false}));
	}
	render(){
		const {series,seriesName,isFetching} = this.state;
		return (
			<div>
			    <Intro message ='Informações sobre séries'/>
				<div>
					<input value={seriesName} type='text' onChange={this.onSeriesInputChange} />
				</div>
				{
					!isFetching && series.length === 0 && seriesName.trim() === ''
					&&
					<p>Por favor entre com o nome da serie</p>
				}
				{
					!isFetching && series.length === 0 && seriesName.trim() !== ''
					&&
					<p>Não há series com esse nome</p>
				}
				{
					isFetching && <Loader />
				}
				{
					!isFetching && <SeriesList list={this.state.series}/>
				}				
			</div>
		)
	}
}

export default Series;