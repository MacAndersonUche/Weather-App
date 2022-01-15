

import { Link } from "react-router-dom";



function ErrorLocation() {


    return (
        <div>
            <h2>Please accept request to use location</h2>
            <Link to="/"> <button>  Home </button></Link>
        </div>
    )
}

export default ErrorLocation;