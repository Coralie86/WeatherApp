export async function getWheather(city) {
    
    const date = getDate();
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Valencia/${date.today}/${date.nextWeek}?key=C9Z6KNQXXT3L7ALUWWCSHSMZR`)
    const data = await response.json();
    console.log(parseData(data));
}

function parseData(data){
    const dataObj = {
        "hours": data.days[0].hours.map(hour => ({
            "hour": hour.datetime,
            "temperature": hour.temp,
            "icon": hour.icon,
            "description": hour.conditions
        })),
        "days": data.days.map(day => ({
            "day": day.datetime,
            "icon": day.icon,
            "humidity": day.humidity,
            "minTemp": day.tempmin,
            "maxTemp": day.tempmax
        })),
        "currentConditions": {
            "conditions": data.currentConditions.conditions,
            "icon": data.currentConditions.icon,
            "humidity": data.currentConditions.humidity,
            "windspeed": data.currentConditions.windspeed,
            "feelslike": data.currentConditions.feelslike,
            "sunrise": data.currentConditions.sunrise,
            "sunset": data.currentConditions.sunset,
            "temp": data.currentConditions.temp
        }
    }
    return dataObj
}

function getDate(){
    const today = new Date();
    const today_7days = new Date(today);
    today_7days.setDate(today.getDate() + 6);
    const nextWeekShort = today_7days.toISOString().split('T')[0];
    const todayShort = today.toISOString().split('T')[0];
    const dateObj = {"today": todayShort, "nextWeek": nextWeekShort};
    return dateObj
}
