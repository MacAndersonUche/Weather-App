import moment from "moment";
import { useContext } from "react";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";
import AppContext from "../AppContext";



const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-content: flex-end;
  text-align: center;
  font-size: 1rem;
  left: 0;

    @media (max-width: 770px) {
 
        width: 100%;
        height: 50%;
    
     font-size: 0.8rem;
  }

   

`

const Image = styled.img`
height: 25rem;
width: 15rem;

  @media (max-width: 770px) {
        
        height: 15rem;
        width: 10rem;
  }

`

const Tex = styled.p`
font-size: 2.5rem;
margin: 1.2rem 0;

    @media (max-width: 770px) {
        
        font-size: 1.2rem;
        margin: 0;
  }

`


const WeatherDiv = ({ weather }) => {
    const Context = useContext(AppContext)




    return (



        <Main>
            {weather.weather && <Image alt="cloud" src={` http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />}
            <Tex>{Context.tempState}</Tex>
            <Tex>{weather.weather && weather.weather[0].description}</Tex>

            <div>
                <p>{moment().format('MMMM Do YYYY')}</p>

                <p><GoLocation /> - {weather && weather.name}</p>
            </div>
        </Main>
    )
}

export default WeatherDiv;