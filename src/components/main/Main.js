import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Series from '../../components/series/Series';
import SingleSeries from '../../components/singleSeries/SingleSeries';
import NotFound from '../../components/notFound/NotFound';
import Develop from '../../components/develop/Develop';

const Main = (props) => (
	<Switch>
		<Route exact path='/' render={props =>
			<div>
				<Series />
				<Develop />
			</div>
		} />	
		<Route path='/series/:id' render={props =>
			<div>
				<SingleSeries params={props} />
				<Develop />
			</div>
		} />
		<Route component={NotFound}/>
	</Switch>
)

export default Main;