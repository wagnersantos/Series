import React from 'react';
import Loader from '../../components/loader/Loader';

const SingleSeriesInfo = ({show}) => {
	return (
		<div>
			{
				show === null && <Loader />
			}
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

export default SingleSeriesInfo;