const icons = {};
const context = require.context('./icons', false, /\.svg$/);
context.keys().forEach(key => {
  icons[key] = context(key);
});
console.log(icons);


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
                <div class="dayInfo">
                <img class="icons" src=${icons["./water-percent.svg"]}>${days[i].humidity}</div>
                <div class="dayInfo">
                <img class="icons" src=${icons["./thermometer-low.svg"]}>${days[i].minTemp}</div>
                <div class="dayInfo">
                <img class="icons" src=${icons["./thermometer-high.svg"]}>${days[i].maxTemp}</div>
            </div>
        </div>`
        html += blockDay;        
    }
    dayContainer.innerHTML = html;
}