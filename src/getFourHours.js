import { getWheather } from "./apiHandler";

export async function getFourHours(city, page) {
    const data = await getWheather(city);
    const arrHours = data.hours.slice(4 * page, 4 + 4 * page);
    const hourContainer = document.querySelector("#hour_container")
    let html = ``;
    for(let i=0;i<=3;i++){
        const blockHour = `<div id="hour_block${i}" class="hour_block">
        <div class="hour">${arrHours[i].hour}</div>
        <div class="icon_info">
            <div class="icon_hour">${arrHours[i].icon}</div>
            <div class="info">            
                <div class="temp">${arrHours[i].temperature}</div>
                <div class="description">${arrHours[i].description}</div>
            </div>
        </div>
    </div>`
        html += blockHour;        
    }
    hourContainer.innerHTML = html;
}