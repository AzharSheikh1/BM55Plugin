import React, { Component } from 'react';
import Table from './common/table';

interface MovieTableProps {
     movies : any,
}

class MovieTable extends Component<MovieTableProps> {

     columns = [
          {path:'title', label:'Title'},
          {path:'genre.name', label:'Genre'},
          {path:'numberInStock', label:'Stock'},
          {path:'dailyRentalRate', label:'Rate'},
     ]

     render() { 
          const {movies} = this.props;
          return (
                    <Table 
                         columns={this.columns} 
                         data={movies}/>            
          );
     }
}
 
export default MovieTable;
