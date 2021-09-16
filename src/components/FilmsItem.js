import React from 'react';

const flex = {
    width: '18%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#000',
    color: '#fff',
    marginBottom: "2%",
}

class FilmsList extends React.Component {

    render() {
        return <article style={flex}>
            <h1>{this.props.title}</h1>
            <h1>{this.props.year}</h1>
            <h1>{this.props.director}</h1>
            <h1>{this.props.duration}</h1>
            <span style={{ margin: "10%" }}>{this.props.rate}</span>
            <div>
                {this.props.genre}
            </div>
        </article >;
    }
}

export default FilmsList;