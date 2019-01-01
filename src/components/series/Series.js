import React, {Component} from 'react';
import SeriesList from '../../components/seriesList/SeriesList';
import SeriesData from '../../services/seriesData/SeriesData';
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
		SeriesData.getSeriesByName(this.props)
      		.then(response => response.json())
      		.then(json => this.setState({series: json, isFetching: false}));
	}
	render(){
		const {series,seriesName,isFetching} = this.state;
		return (
			<div className='container '>
			    <Intro message ='Informações sobre séries'/>
				<div className='mb-3'>
					<input className='form-control' value={seriesName} type='text' 
						placeholder='Digite aqui. Ex: flash' onChange={this.onSeriesInputChange} 
						style={{maxWidth: 500, margin: '0 auto'}}/>
				</div>
				{
					!isFetching && series.length === 0 && seriesName.trim() === ''
					&&
					<p>Por favor entre com o nome da serie</p>
				}
				{
					!isFetching && series.length === 0 && seriesName.trim() !== ''
					&&
					<p >Não há series com esse nome</p>
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