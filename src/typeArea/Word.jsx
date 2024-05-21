import { useContext } from "react";
import { Context } from "../App";
import PropTypes from "prop-types";
import Letter from "/src/typeArea/letter.jsx";

function Word({ text, input, next }) {
    const context = useContext(Context);
    var letters = [];
    var maxLength = Math.max(input.length, text.length)
    const ref = (el) => {
        if (next && context.userInput[context.userInput.length - 1] == " " && el != null) {
            context.setLastLetterX(el.getBoundingClientRect().left);
            context.setLastLetterY(el.getBoundingClientRect().top - 8);
        }
    }
    for (let i = 0; i < maxLength; i++) {
        let classes = "";
        if (input.length > i) classes += " filled";
        if (text[i] == input[i]) classes += " correct";
        if (input.length > i && text[i] != input[i]) classes += " incorrect";
        if (text.length - 1 < i) classes += " extra";
        let letter = text[i];
        if (text.length - 1 < i) letter = input[i];
        letters.push(<Letter key={i} letter={letter} classes={classes}/>)
    }

    return (
        <span className="word" ref={ref}>
            {letters}
        </span>
    )
}

Word.propTypes = {
    text: PropTypes.string,
    input: PropTypes.string,
    next: PropTypes.bool
}

export default Word;