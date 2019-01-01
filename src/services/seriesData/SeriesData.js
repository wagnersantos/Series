const SeriesData = {
	getSeriesByName(props){
		return fetch(`https://api.tvmaze.com/search/shows?q=${props}`)
	},
	getSeriesById(props){
		return fetch(`https://api.tvmaze.com/shows/${props.match.params.id}?embed=episodes`)
	}
}

export default SeriesData;