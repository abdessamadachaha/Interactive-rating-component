import star from "../assets/icon-star.svg";
import Ratings from "./Ratings";


function Active({ rating, setRating, handleClick }) {
    return (
        <>
            <div className="starIcon">
                 <img
                    src={star}
                    alt="star icon"
                />
            </div>

            <h2 className="question">How did we do?</h2>
            <p className="description">
                Please let us know how see did with your support request. All feedback is appreciated to help us improve our offering!
            </p>

            <Ratings 
                rating = { rating }
                setRating = { setRating }
            />

            <button 
                className="submitRating"
                onClick={ handleClick }
            >
            submit
            </button> 

        </>
    );
}

export default Active;