import styled from "styled-components";


const Main = styled.div`

width: 25%
height: 20%;
font-size: 1.2rem;

background-Color: #0F5A80;
text-align: center;

`




const FiveSingleDay = ({ forecast, itemNo }) => {


    function convertToCelsius(num) {
        return Math.floor(num - 273);

    }



    return (
        <Main>
            <h3>{new Date(forecast.list[itemNo].dt_txt).toLocaleDateString()}</h3>
            <img alt="My Cloud" src={` http://openweathermap.org/img/wn/${forecast.list[itemNo].weather[0].icon}@2x.png`} />
            <p>Temp: {convertToCelsius(forecast.list[itemNo].main.temp) + "®C"}</p>
        </Main>
    );
}

export default FiveSingleDay;