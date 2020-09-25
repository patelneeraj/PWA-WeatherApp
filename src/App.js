import React, {useState} from 'react';


import {getWeather} from './api/weatherAPI'
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('');

    const search = async(e) => {
        
        if(e.key === 'Enter'){
            const data = await getWeather(query);

            setWeather(data);
            setQuery('');
        }
    };

    return(
        <div className="main-container">
            <input 
                className="search"
                type="text"
                placeholder="Search City"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;F</sup>
                    </div>
                    <div className="info">
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;