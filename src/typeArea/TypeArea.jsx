import Word from "/src/typeArea/word.jsx";

function TypeArea() {
    var text = "Hello world"
    var words = text.split(" ").map(
        (word, index) => 
        <Word key={index} text={word} />
    );
    return (
        <>
            {words}
        </>
    );
}

export default TypeArea;