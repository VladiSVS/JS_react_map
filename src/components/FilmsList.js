import React from 'react';
import FilmsItem from './FilmsItem';
import movies from './DataFilms';

class FilmsList extends React.Component {
    state = {
        movies: movies.slice()
    }
    render() {
        return <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {this.state.movies.map((elt, i) =>
                <FilmsItem
                    title={elt.title}
                    year={elt.year}
                    director={elt.director}
                    duration={elt.duration}
                    rate={elt.rate}
                    key={i}
                />)}
        </div>;
    }
}

export default FilmsList;
