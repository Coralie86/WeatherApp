import { getWheather } from "./apiHandler";


export async function getSixDays(city) {
    const data = await getWheather(city);
    console.log(data);
    const dayContainer = document.querySelector("#day_container")
    let html = ``;
    for(let i=1;i<=6;i++){
        const blockDay = `<div class="forecast" id="day+${i}">
            <div class="first_line">
                <div class="dayName">${data.days[i].day}</div>
                <div class="icon">${data.days[i].icon}</div>
            </div>
            <div class="second_line">
                <div class="humidity">${data.days[i].humidity}</div>
                <div class="minTemp">${data.days[i].minTemp}</div>
                <div class="maxTemp">${data.days[i].maxTemp}</div>
            </div>
        </div>`
        html += blockDay;        
    }
    dayContainer.innerHTML = html;
}