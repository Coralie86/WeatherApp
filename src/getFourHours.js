

export function getFourHours() {
    const blockHour = document.querySelector('#hour_block1');
    const hourContainer = document.querySelector("#hour_container")
    for(let i=2;i<=4;i++){
        const newBlockHour = blockHour.cloneNode(true);
        newBlockHour.id = newBlockHour.id.slice(0, -1) + i.toString();
        newBlockHour.textContent = "time";
        hourContainer.appendChild(newBlockHour);
    }
}