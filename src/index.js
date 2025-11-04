
import "./styles.css";
import night from '../gifs/GIF by Fabiola Lara  Casa Girl.gif';
import day from '../gifs/Pokemon Anime Sun GIF by Pokémon.gif';
import { getFourHours } from "./getFourHours";
import { getSixDays } from "./getSixDays";
import {next, previous} from "./inputHandler";
import {getCurrentConditions} from "./getCurrentConditions"

const background = document.querySelector('#background')
const date = new Date();
if (date.getHours() >= 19 || date.getHours() <= 5){
    background.style.backgroundImage = `url(${night})`
} else {
    background.style.backgroundImage = `url(${day})`
}



const App = (() => {
    let pageHour = 0;

    const showWeather = () => {
        getFourHours("Barcelona", pageHour);
        getSixDays("Barcelona");
    }

    const init = () => {
        getCurrentConditions("Barcelona");
        const btnNext = document.querySelector('#next');
        btnNext.addEventListener('click', function() {
            pageHour = next(pageHour);
            getFourHours("Barcelona", pageHour);
        })
        const btnPrevious = document.querySelector('#previous'); 
        btnPrevious.addEventListener('click', function() {
            pageHour = previous(pageHour);
            getFourHours("Barcelona", pageHour);
        })
        showWeather();
    }
    return {init}
})();

App.init();