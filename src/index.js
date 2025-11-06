
import "./styles.css";
import { getFourHours } from "./getFourHours";
import { getSixDays } from "./getSixDays";
import {next, previous, getCity} from "./inputHandler";
import {getCurrentConditions} from "./getCurrentConditions"
import { getWheather } from "./apiHandler";


const App = (() => {
    let pageHour = 0;
    let hours = [];

    const showWeather = async (city) => {
        const data = await getWheather(city);
        const current_conditions = data.currentConditions;
        const days = data.days;
        hours = data.hours;

        getFourHours(hours, pageHour);
        getSixDays(days);
        getCurrentConditions(current_conditions)
    }

    const init = () => {
        const btnNext = document.querySelector('#next');
        btnNext.addEventListener('click', function() {
            pageHour = next(pageHour);
            getFourHours(hours, pageHour);
        })
        const btnPrevious = document.querySelector('#previous'); 
        btnPrevious.addEventListener('click', function() {
            pageHour = previous(pageHour);
            getFourHours(hours, pageHour);
        })
        const btnSearch = document.querySelector('#searchbtn');
        btnSearch.addEventListener('click', function() {
            showWeather(getCity());
        })
        showWeather("Barcelona");
    }
    return {init}
})();

App.init();