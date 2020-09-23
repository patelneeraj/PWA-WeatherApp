import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '87a0133d08364e27c0816ac58083c223'

export const getWeather = async(query) => {
    
    const {data} = await axios.get(URL, {
        params:{
            q:query,
            units:'imperial',
            appid:API_KEY
        }
    });
    
    return data;
}
