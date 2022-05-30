import React, { Component } from 'react';
import { getMovies } from '../../server/fakeMovieService';
import {getGenres} from '../../server/fakeGenreService';
import MovieTable from './movieTable';
import ListGroup from './common/listgroup';
import _ from 'lodash';


interface MovieState {
    movies : any,
    genres : any,
    selectedGenre? : any
}

class Movies extends Component {

    state : MovieState = {
        movies : [],
        genres : [],
    }

    handleSelect = (genre: any) => {
        // setting current page to 1 
        this.setState({selectedGenre : genre})
    }

    componentDidMount () {
        const genres = [{'_id':'', 'name':'All'}, ...getGenres()];
        this.setState({movies : getMovies(), genres})
    }

    getPageData = () => {
        let {movies : allMovies, selectedGenre } = this.state;
        let date2 = new Date();
        
        const movies = selectedGenre && selectedGenre._id
        ? allMovies.filter((m: { genre: { _id: any; }; }) => {
            let date1 = new Date(selectedGenre._id);
            return date2 >= m.genre._id && date1 <= m.genre._id;
        }) 
        : allMovies;

        return {data : movies};
    }

    render() : JSX.Element { 
        let {movies : allMovies, selectedGenre, genres} = this.state;
        
        if (allMovies.length === 0) {
            return <p>No movies in the database</p>;
        }

        const {data : movies} = this.getPageData();

        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <ListGroup 
                            items={genres}
                            onItemSelect={this.handleSelect}
                            selectedItem={selectedGenre} 
                        />
                    </div>
                    <div className="col">
                        <MovieTable 
                            movies={movies}/>  
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Movies;