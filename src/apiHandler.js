import {convertData} from "./converter";

export async function getWheather(city) {
    try {
        const date = getDate();
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Poitiers/${date.today}/${date.nextWeek}?key=C9Z6KNQXXT3L7ALUWWCSHSMZR`)
        const data = await response.json();
        const dataConverted = convertData(data);
        return dataConverted
    }
    catch (error) {
        console.error("API Call failed", error);
        return null;
    }
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
