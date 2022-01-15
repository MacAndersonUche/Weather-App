import { Link } from "react-router-dom";



function Error() {


    return (
        <div>
            <h2>Invalid City</h2>
            <Link to="/"> <button>  Home </button></Link>
        </div>
    )
}

export default Error;