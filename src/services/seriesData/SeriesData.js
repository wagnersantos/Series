const SeriesData = {
	getSeriesByName(props){
		return fetch(`http://api.tvmaze.com/search/shows?q=${props}`)
	},
}

export default SeriesData;