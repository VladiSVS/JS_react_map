import React from 'react';

const flex = {
    width: "10em",
    height: "100%",
    textAlign: "center",
    border: "1px solid black",
}

class WeatherItem extends React.Component {
    render() {
        return <div>
            <div style={flex}>
                <h1>{this.props.weekday}</h1>
                <img src={this.props.urlImg} alt=""></img>
                <p>{this.props.dayTemp}&#8451; <span>{this.props.nightTemp}&#8451;</span></p>
            </div>
        </div >;
    }
}

export default WeatherItem;