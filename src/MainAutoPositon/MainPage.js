
import { Fragment } from "react/cjs/react.production.min";
import FiveDayForecast from "../FiveDaysWeather/FiveDayForecast";
import MainSearchDisplay from "../MainSearchPosition/MainSearchDisplay";
import TodayOtherDetails from "../TodaysWeather/TodayOtherDetails";



const MainPage = ({ weather, forecast, searchClicked }) => {







    return (


        <div>
            <div>
                <button>C</button>
                <button>F</button>
            </div>
            <FiveDayForecast forecast={forecast} />
            <h3>Todays Highlights</h3>
            <TodayOtherDetails weather={weather} />

        </div>




    )

}


export default MainPage;
