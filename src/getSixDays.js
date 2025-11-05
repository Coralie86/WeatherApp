
export async function getSixDays(days) {
    const dayContainer = document.querySelector("#day_container")
    let html = ``;
    for(let i=1;i<=6;i++){
        const blockDay = `<div class="forecast" id="day+${i}">
            <div class="first_line">
                <div class="dayName">${days[i].day}</div>
                <img class="iconDays" src="${days[i].icon}">
            </div>
            <div class="second_line">
                <div class="humidity">${days[i].humidity}</div>
                <div class="minTemp">${days[i].minTemp}</div>
                <div class="maxTemp">${days[i].maxTemp}</div>
            </div>
        </div>`
        html += blockDay;        
    }
    dayContainer.innerHTML = html;
}