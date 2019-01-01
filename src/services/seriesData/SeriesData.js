const SeriesData = {
	getSeriesByName(props){
		return fetch(`https://api.tvmaze.com/search/shows?q=${props}`)
	},
	getSeriesById({params}){
		return fetch(`https://api.tvmaze.com/shows/${params.match.params.id}?embed=episodes`)
	}
}

export default SeriesData;