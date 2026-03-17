import { useState } from "react";
import Ratings from "./Ratings";
import Message from "./Message";
import Active from "./Active";

function Main() {
    const [rating, setRating] = useState(null);
    const [submit, setSubmit] = useState(false);

    function handleClick() {
        rating ? setSubmit(prev => !prev) : "";
    }
    return (
        <div className="container" style={ submit ? {alignItems:  "center", textAlign: "center"} : {}}>
            { !submit ?
                <Active 
                    rating={ rating }
                    setRating={ setRating }
                    handleClick={ handleClick }
                />:
                <Message rating={ rating } />
            }
            
        </div>
    );
}

export default Main;
