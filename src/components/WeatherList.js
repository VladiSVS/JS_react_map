import React from 'react';
import WeatherItem from './WeatherItem';
import weather from './DataWeather';

class WeatherList extends React.Component {
    state = {
        weather: weather.slice()
    }
    render() {
        return <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", margin: " 5% 0" }}>
            {this.state.weather.map((elt, i) =>
                <WeatherItem
                    weekday={elt.weekday}
                    urlImg={elt.urlImg}
                    dayTemp={elt.dayTemp}
                    nightTemp={elt.nightTemp}
                    key={i}
                />)}
        </div>;
    }
}

export default WeatherList;