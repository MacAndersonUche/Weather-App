import moment from "moment";
import { useContext } from "react";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppContext from "../AppContext";



const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 90%;
  align-content: flex-end;
  text-align: center;
  font-size: 1rem;
  left: 0;

//     @media (max-width: 770px) {
 
//      display: flex;
//      flex-direction: row;
     
//      justify-content: space-evenly;
//      align-content: center;
//      width: 40%;
//     height: 80%;
    
//      font-size: 0.8rem;
//   }

 @media (max-width: 770px) {
 
        width: 100%;
        height: 70%;
    
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




const MainSearchDisplay = ({ weather }) => {
    const Context = useContext(AppContext)

    return (
        <Main>
            <Link to="/"><button>Go back</button></Link>
            <div>

                {weather.weather && <Image alt="cloud" src={` http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />}

            </div>
            <div>
                <Tex>{Context.tempState}</Tex>
                <Tex>{weather.weather && weather.weather[0].description}</Tex>

            </div>

            <div>
                <p>{moment().format('MMMM Do YYYY')}</p>

                <p><GoLocation /> - {weather && weather.name}</p>
            </div>
        </Main>
    )
}

export default MainSearchDisplay;