import Context from "../context";
import Word from "/src/typeArea/word.jsx";

function TypeArea() {
    var text = "Hello world"
    var words = text.split(" ").map(
        (word, index) => 
        <Word key={index} text={word} />
    );
    return (
        <div>
            {words}
            <Context.Consumer>
                {({ userInput}) => (
                    <h1>{userInput}</h1>
                )}
            </Context.Consumer>
        </div>
    );
}

export default TypeArea;