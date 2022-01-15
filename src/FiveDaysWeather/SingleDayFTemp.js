


const SingleDayFTemp = ({ forecast, itemNo }) => {

    function convertToFaren(num) {

        return `${Math.floor(((num - 273) * 9 / 5) + 32)} F`
    }

    return <p>Temp: {forecast.list && convertToFaren(forecast.list[itemNo].main.temp)}</p>
}

export default SingleDayFTemp;