//Convert date format received into DayName, DayNb MonthName
export function convertDate(date){
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let dateConverted = new Date(date)
    let day = dateConverted.getDay();
    let nbDay = dateConverted.getDate();
    let month = dateConverted.getMonth();
    let finalDate = week[day] + ", " + nbDay + " " + months[month]

    return finalDate
}

//Convert hour received into HH:mm AM/PM
export function convertHour(hour) {
    let hourConverted = new Date("2025-01-01," + hour);
    let hourOnly = hourConverted.getHours();
    let minute = hourConverted.getMinutes();
    let hourFinal = "";
    if(hourOnly <=12 && minute != 0){
        hourFinal = hourOnly.toString() + ":" + minute.toString()  + " AM";
    }else if(hourOnly <=12 && minute == 0){
        hourFinal = hourOnly.toString() + " AM";
    }else if(hourOnly >12 && minute != 0) {
        hourFinal = hourOnly.toString()  + ":" + minute.toString()  + " PM";
    }else {
        hourFinal = hourOnly.toString() + " PM";
    }
    return hourFinal
}

//Convert te,perqture into Degree Celcius
export function convertTemp(temperature){
    let degreeCelcius = Math.round((temperature -32) * (5/9)).toFixed(1);
    return degreeCelcius.toString() + "C°"
}

//Convert speed in to km/k
export function convertSpeed(speed){
    return (speed * 1.609344).toString() + " km/h"
}

//Convert data received into obj with data used
export function convertData(data){
    const dataObj = {
        "hours": data.days[0].hours.map(hour => ({
            "hour": convertHour(hour.datetime),
            "temperature": convertTemp(hour.temp),
            "icon": hour.icon,
            "description": hour.conditions
        })),
        "days": data.days.map(day => ({
            "day": convertDate(day.datetime),
            "icon": day.icon,
            "humidity": day.humidity.toString() + "%",
            "minTemp": convertTemp(day.tempmin),
            "maxTemp": convertTemp(day.tempmax)
        })),
        "currentConditions": {
            "location": data.address,
            "today": convertDate(data.days[0].datetime),
            "conditions": data.currentConditions.conditions,
            "icon": data.currentConditions.icon,
            "humidity": data.currentConditions.humidity.toString() + "%",
            "windspeed": convertSpeed(data.currentConditions.windspeed),
            "feelslike": convertTemp(data.currentConditions.feelslike),
            "sunrise": convertHour(data.currentConditions.sunrise),
            "sunset": convertHour(data.currentConditions.sunset),
            "temp": convertTemp(data.currentConditions.temp)
        }
    }
    return dataObj
}