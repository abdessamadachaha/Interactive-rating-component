import thank from "../assets/illustration-thank-you.svg";

function Message({ rating }) {
    return (
        <>
            <img
                src= {thank}
                 alt="thank image"
            />

            <div className="result">
                You selected {rating} out of 5
            </div>

            <h2>Thank you!</h2>

            <p>We appreciate you taking the time to give a rating. if you ever need more support, don't hesitate to get in touch!</p>

        </>
    );
}

export default Message;