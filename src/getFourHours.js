export async function getFourHours(hours, page) {
    const arrHours = hours.slice(4 * page, 4 + 4 * page);
    const hourContainer = document.querySelector("#hour_container")
    let html = ``;
    for(let i=0;i<=3;i++){
        const blockHour = `<div id="hour_block${i}" class="hour_block">
        <div class="hour">${arrHours[i].hour}</div>
        <div class="icon_info">
            <img class="icon_hour" src="${arrHours[i].icon}">
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