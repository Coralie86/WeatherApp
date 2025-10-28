

export function getFourHours() {
    const hourContainer = document.querySelector("#hour_container")
    let html = ``;
    for(let i=1;i<=4;i++){
        const blockHour = `<div id="hour_block${i}" class="hour_block">time</div>`
        html += blockHour;        
    }
    hourContainer.innerHTML = html;
}