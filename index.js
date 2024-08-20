//imperatively creating DOM elements in js.
const div =document.createElement("div");
div.id = "card1";
div.className = "card";
div.textContent = "hello World";
document.body.appendChild(div);
//using JSX 
const div = (
    <div id="card1" className="card">
        hello world
    </div>
);
ReactDOM.render(div, document.body);
function Tweet() {
    const currentTime = new Date().toString();
    //returns jsx
    return (
        <div className="tweet">
            <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
            <div className="tweet_body">
                <p>we are writing this tweet in JSX.Holy moly!</p>
                <p>{Math.floor(Math.random() * 100)} retweets</p>
                <p>{currentTime}</p>
            </div>

        </div>
    );
}
// the retweet count and current time are dynamic bcz they change every time the tweet component re-renders.