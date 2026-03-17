function Ratings({ rating, setRating }) {
    
    const styleButtonActive = {
        backgroundColor:  "white",
        color: "hsl(216, 12%, 8%)",
        fontWeight: "700"
    }

    return (
        <div className="ratings">
            <div 
                style={rating === 1 ?
                    styleButtonActive :
                    {}
                }
                onClick={() => setRating(1)}
            >1
            </div>
            
            <div 
                style={rating === 2 ?
                    styleButtonActive :
                    {}
                }
                onClick={() => setRating(2)}
            >2
            </div>

            <div 
                style={rating === 3 ?
                    styleButtonActive :
                    {}
                }
                onClick={() => setRating(3)}
            >3
            </div>

            <div 
                style={rating === 4 ?
                    styleButtonActive :
                    {}
                }
                onClick={() => setRating(4)}
            >4
            </div>

            <div 
               style={rating === 5 ?
                    styleButtonActive :
                    {}
                }
                onClick={() => setRating(5)}
            >5
            </div>
        </div>
    );

}

export default Ratings;