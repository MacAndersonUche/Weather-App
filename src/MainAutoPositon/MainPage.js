
import { useContext } from "react";
import styled from "styled-components";
import AppContext from "../AppContext";
import FiveDayForecast from "../FiveDaysWeather/FiveDayForecast";
import TodayOtherDetails from "../TodaysWeather/TodayOtherDetails";


export const Button = styled.button`
height: 2rem;
width: 2rem;
border-radius: 0.5rem;
font-size: 1rem

`

const MainBtn = styled.div`
left: 0;


`




const MainPage = ({ weather, forecast }) => {

    const Context = useContext(AppContext);





    return (


        <div>
            <MainBtn>
                <Button onClick={Context.convertToC} >C</Button>
                <Button onClick={Context.convertToF}>F</Button>
            </MainBtn>
            <FiveDayForecast forecast={forecast} />
            <h3>Todays Highlights</h3>
            <TodayOtherDetails weather={weather} />

        </div>




    )

}


export default MainPage;
