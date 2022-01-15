import { useContext } from "react";
import styled from "styled-components";
import AppContext from "../AppContext";
import SingleDayFTemp from "./SingleDayFTemp";


const Main = styled.div`

width: 15%;
height: 20%;
font-size: 0.8rem;

background-Color: #0F5A80;
text-align: center;

  @media (max-width: 770px) {
 
        width: 20%;
        height: 15%;
        margin: 0 2px;
     font-size: 0.8rem;
  }

`


const Image = styled.img`
height: 70%;
width: 70%;

`



const FiveSingleDay = ({ forecast, itemNo }) => {

    const local = useContext(AppContext);

    function convertToCelsius(num) {
        return Math.floor(num - 273);

    }



    return (
        <Main>
            <h5>{new Date(forecast.list[itemNo].dt_txt).toLocaleDateString()}</h5>
            <Image alt="My Cloud" src={` http://openweathermap.org/img/wn/${forecast.list[itemNo].weather[0].icon}@2x.png`} />
            {!local.fiveFar && <p>Temp: {convertToCelsius(forecast.list[itemNo].main.temp) + "C"}</p>}
            {local.fiveFar && <SingleDayFTemp forecast={forecast} itemNo={itemNo} />}
        </Main>
    );
}

export default FiveSingleDay;