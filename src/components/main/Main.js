import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Series from '../../components/series/Series';
import SingleSeries from '../../components/singleSeries/SingleSeries';
import NotFound from '../../components/notFound/NotFound';

const Main = (props) => (
	<Switch>
		<Route exact path='/' component={Series} />	
		<Route path='/series/:id' component={SingleSeries} />	
		<Route component={NotFound}/>
	</Switch>
)

export default Main;