const icons = {};
const context = require.context('./icons', false, /\.svg$/);
context.keys().forEach(key => {
  icons[key] = context(key);
});

export async function getCurrentConditions(conditions) {
    const container = document.querySelector('#location_today');
    let html = `
        <div id="location_name">${conditions.location}</div>
        <div id="date_of_day">${conditions.today}</div>
        <div id="current_temp_icon">
            <div id="current_temperature">${conditions.temp}</div>
            <img id="current_icon" src="${conditions.icon}">
        </div>
        <div id="current_weather_desc">${conditions.conditions}</div>        
        <div id="current_first_line">
            <div class="currentInfo">
            <img class="icons" src=${icons["./water-percent.svg"]}>${conditions.humidity}</div>
            <div class="currentInfo">
            <img class="icons" src=${icons["./weather-windy.svg"]}>${conditions.windspeed}</div>
            <div class="currentInfo">Feels: ${conditions.feelslike}</div>
        </div>
        <div id="current_second_line">
            <div class="currentInfo">
            <img class="icons" src=${icons["./weather-sunset-up.svg"]}>${conditions.sunrise}</div>
            <div class="currentInfo">
            <img class="icons" src=${icons["./weather-sunset-down.svg"]}>${conditions.sunset}</div>
        </div>
    `
    container.innerHTML = html;

}