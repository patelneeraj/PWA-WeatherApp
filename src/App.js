import React, {useState} from 'react';


import {getWeather} from './api/weatherAPI'

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
        <div>
            <input 
                type="text"
                placeholder="city"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
            {weather.main && (
                <div>
                    <h2>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;F</sup>
                    </div>
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;