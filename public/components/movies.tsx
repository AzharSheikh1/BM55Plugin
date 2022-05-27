import React, { Component } from 'react';
import { getMovies } from '../../server/fakeMovieService';
import MovieTable from './movieTable';


interface MovieState {
    movies : any,
}

class Movies extends Component {

    state : MovieState = {
        movies : [],
    }

    componentDidMount () {
        this.setState({movies : getMovies()})
    }

    getPageData = () => {
        let {movies } = this.state;
        return {data : movies};
    }

    render() : JSX.Element { 
        let {movies : allMovies} = this.state;
        if (allMovies.length === 0) {
            return <p>No movies in the database</p>;
        }

        const {data : movies} = this.getPageData();

        return ( 
            <React.Fragment>
                <div className="row">
                    <MovieTable 
                        movies={movies}/>  
                </div>
            </React.Fragment>
        );
    }
}
 
export default Movies;