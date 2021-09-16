import React from 'react';
import FilmsItem from './FilmsItem';
import movies from './DataFilms';

const but = {
    color: '#fff',
    backgroundColor: '#000',
    border: 'none',
    padding: '1em',
    marginRight: "1%",
    cursor: 'pointer',
}

class FilmsList extends React.Component {
    state = {
        movies: movies.slice()
    }

    handleSortDateA = () => {
        let temp = this.state.movies
        console.log(movies)
        temp.sort((a, b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0))
        console.log(temp)
        this.setState({ movies: temp })
    }
    handleSortDateB = () => {
        let temp = this.state.movies
        console.log(movies)
        temp.sort((a, b) => (a.year < b.year) ? 1 : ((b.year < a.year) ? -1 : 0))
        console.log(temp)
        this.setState({ movies: temp })
    }
    handleSortRate = () => {
        let temp = this.state.movies
        console.log(movies)
        temp.sort((a, b) => (a.rate < b.rate) ? 1 : ((b.rate < a.rate) ? -1 : 0))
        console.log(temp)
        this.setState({ movies: temp })
    }

    handleSortAZ = () => {
        let temp = this.state.movies
        console.log(movies)
        temp.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
        console.log(temp)
        this.setState({ movies: temp })
    }

    handleSortZA = () => {
        let temp = this.state.movies
        console.log(movies)
        temp.sort((a, b) => (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0))
        console.log(temp)
        this.setState({ movies: temp })
    }
    handleSortGenre = () => {
        let temp = this.state.movies
        console.log(movies)
        temp.sort((a, b) => (a.genre > b.genre) ? 1 : ((b.genre > a.genre) ? -1 : 0))
        console.log(temp)
        this.setState({ movies: temp })
    }

    render() {
        return <section style={{ margin: "0 2%" }}>
            <div style={{ display: 'flex', justifyContent: 'start', marginBottom: '2%' }}>
                <input onClick={this.handleSortDateA} style={but} type="button" value="Sort by Date Ascending" />
                <input onClick={this.handleSortDateB} style={but} type="button" value="Sort by Date Descending" />
                <input onClick={this.handleSortRate} style={but} type="button" value="Best Rate" />
                <input onClick={this.handleSortAZ} style={but} type="button" value="A-Z" />
                <input onClick={this.handleSortZA} style={but} type="button" value="Z-A" />
                <input onClick={this.handleSortGenre} style={but} type="button" value="Genre" />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {this.state.movies.map((elt, i) =>
                    <FilmsItem
                        title={elt.title}
                        year={elt.year}
                        director={elt.director}
                        duration={elt.duration}
                        genre={elt.genre.map((elt, j) =>
                            <p>{elt}</p>)}
                        rate={elt.rate}
                        key={i}
                    />)
                }
            </div >
        </section>;
    }
}

export default FilmsList;
