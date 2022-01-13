import styled from "styled-components";


const TodayComponets = styled.div`
background-Color: #0F5A80;
height: 10rem;
width: 22.5rem;
// display: flex;
// justify-content: center;
// align-content: center;
text-align: center;
margin: 0.5rem; 1rem;
`

const Main = styled.div`
height: 20rem;
width: 100%;
  display: flex;
  flex-wrap: wrap;

 align-content: space-evenly;
 text-align: center;

`



const TodayOtherDetails = ({ weather }) => {

    function roundToTwo(num) {
        return +(Math.round(num + "e+2") + "e-2");
    }

    return (
        <Main>
            <TodayComponets>
                <p>Wind Status</p>
                <h2>{weather.wind && weather.wind.speed} m/s</h2>
            </TodayComponets>
            <TodayComponets>
                <p>Humidity</p>
                <h2>{weather.main && weather.main.humidity}%</h2>
            </TodayComponets>
            <TodayComponets>
                <p>Visibility</p>
                <h2>{weather && roundToTwo(weather.visibility * 0.000621)} miles</h2>
            </TodayComponets>
            <TodayComponets>
                <p>Air Pressure</p>
                <h2>{weather.main && roundToTwo(weather.main.pressure / 1000)} atm </h2>
            </TodayComponets>

        </Main>
    )
}

export default TodayOtherDetails;