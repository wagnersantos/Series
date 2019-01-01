import React, {Component} from 'react';
import Loader from '../../components/loader/Loader';
import Translate from '../../services/translate/Translate';
import ButtonBack from '../../components/buttonBack/ButtonBack';

class SingleSeriesInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			summary: '',
			hasError: false
		}

	}
	getSummary(text){
		if(!this.state.hasError){
			Translate.getTranslator(text.replace(/<[^>]*>/g, ''))
				.then(response => {
					if(response.status !== 200){
						response.json().then(data => console.log(data.message))
						this.setState({summary: text.replace(/<[^>]*>/g, '')});
						this.setState({hasError: true});
					}else{
						response.json().then(json => this.setState({summary: json.text}));
					}
				})
      	}

      	return this.state.summary;
	}
	render(){
		const {show} = this.props;

		return (
			<div className='container'>
				{
					show === null && <Loader />
				}
				{
					show !== null  
					&& 
					<div>
						<div>
							<p className='font-weight-bold' style={{fontSize: 20}}>{show.name}</p>
							<p>Lançamento - {new Date(show.premiered).toLocaleDateString()}</p>
							<p>Pontuação - {show.rating.average}</p>
							<p>Episódios - {show._embedded.episodes.length}</p>
							<p>Temporadas - {show._embedded.episodes[show._embedded.episodes.length-1]
								.season}</p>
							<p>
								<img className='border shadow border-dark rounded' alt='show' 
									src={show.image.medium} />
							</p>
							<div className='card  border-0'>
								 <div className='card-body'>
									<p className='text-justify'>{this.getSummary(show.summary)}</p>
		        				</div>
		        			</div>
						</div>
						<ButtonBack />
					</div>
				}
			</div>			
		)
	}
}

export default SingleSeriesInfo;