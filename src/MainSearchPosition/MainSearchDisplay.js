import moment from "moment";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 90%;
  align-content: flex-end;
  text-align: center;
  font-size: 1rem;
  left: 0;

`

const Image = styled.img`
height: 25rem;
width: 15rem;

`
const Tex = styled.p`
font-size: 2.5rem;
margin: 1.2rem 0;

`




const MainSearchDisplay = ({ weather }) => {

    return (
        <Main>
            <Link to="/"><button>Go back</button></Link>
            {weather.weather && <Image alt="cloud" src={` http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />}
            <Tex>{weather.main && Math.floor(weather.main.temp - 273.15) + "°C"}</Tex>
            <Tex>{weather.weather && weather.weather[0].description}</Tex>

            <div>
                <p>{moment().format('MMMM Do YYYY')}</p>

                <p><GoLocation /> - {weather && weather.name}</p>
            </div>
        </Main>
    )
}

export default MainSearchDisplay;