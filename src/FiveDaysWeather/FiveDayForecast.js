import React from "react";
import styled from "styled-components";
import FiveSingleDay from "./FiveSingle";


const Main = styled.div`

display: flex;
justify-content: space-between;
align-content: center;
text-align: center;


`





const FiveDayForecast = ({ forecast }) => {


    return (

        <div>
            {forecast.list &&

                <Main>

                    <FiveSingleDay forecast={forecast} itemNo={3} />
                    <FiveSingleDay forecast={forecast} itemNo={11} />
                    <FiveSingleDay forecast={forecast} itemNo={19} />
                    <FiveSingleDay forecast={forecast} itemNo={27} />
                    <FiveSingleDay forecast={forecast} itemNo={35} />

                </Main>
            }
        </div>


    )
};


export default FiveDayForecast; 