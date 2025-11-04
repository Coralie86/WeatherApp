import { getWheather } from "./apiHandler";

export async function getCurrentConditions(city) {
    const data = await getWheather(city);
    console.log(data);
    const container = document.querySelector('#location_today');
    let html = `
        <div id="location_name">${data.currentConditions.location}</div>
        <div id="date_of_day">${data.currentConditions.today}</div>
        <div id="current_temp_icon">
            <div id="current_temperature">${data.currentConditions.temp}</div>
            <div id="current_icon">${data.currentConditions.icon}</div>
        </div>
        <div id="current_weather_desc">${data.currentConditions.conditions}</div>        
        <div id="current_first_line">
            <div class="humidity">${data.currentConditions.humidity}</div>
            <div class="windSpeed">${data.currentConditions.windspeed}</div>
            <div class="feelsLike">${data.currentConditions.feelslike}</div>
        </div>
        <div id="current_second_line">
            <div class="sunrise">${data.currentConditions.sunrise}</div>
            <div class="sunset">${data.currentConditions.sunset}</div>
        </div>
    `
    container.innerHTML = html;

}