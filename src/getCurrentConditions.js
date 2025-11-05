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
            <div class="humidity">${conditions.humidity}</div>
            <div class="windSpeed">${conditions.windspeed}</div>
            <div class="feelsLike">${conditions.feelslike}</div>
        </div>
        <div id="current_second_line">
            <div class="sunrise">${conditions.sunrise}</div>
            <div class="sunset">${conditions.sunset}</div>
        </div>
    `
    container.innerHTML = html;

}