
export function getSixDays() {
    const dayContainer = document.querySelector("#day_container")
    let html = ``;
    for(let i=1;i<=6;i++){
        const blockDay = `<div class="forecast" id="day+${i}"></div>`
        html += blockDay;        
    }
    dayContainer.innerHTML = html;
}