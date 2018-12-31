import React from 'react';
import Loader from '../../components/loader/Loader';
import {Link} from 'react-router-dom';

const ButtonBack = ({series}) => (
	<Link to={'/'}>
		<div>
			<input type='button' className='btn btn-dark' value='Voltar' />
		</div>
	</Link>
);

const SingleSeriesInfo = ({show}) => {
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
								<p className='text-justify' dangerouslySetInnerHTML={{__html: 
	        						show.summary}}></p>
	        				</div>
	        			</div>
					</div>
					<ButtonBack />
				</div>
			}
		</div>			
	)
}

export default SingleSeriesInfo;