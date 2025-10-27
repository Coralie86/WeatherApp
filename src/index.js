
import "./styles.css";
import night from '../gifs/tired space GIF by Cartoon Hangover.gif';
import day from '../gifs/Pokemon Anime Sun GIF by Pokémon.gif';
import { getFourHours } from "./getFourHours";

async function getWheather(city) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Valencia/2025-10-21/2025-10-28?key=C9Z6KNQXXT3L7ALUWWCSHSMZR`)

    console.log(await response.json());
}

getWheather('Valencia')

const background = document.querySelector('#background')
const date = new Date();
if (date.getHours() >= 19 || date.getHours() <= 5){
    background.style.backgroundImage = `url(${night})`
} else {
    background.style.backgroundImage = `url(${day})`
}
console.log(date.getHours())

getFourHours();