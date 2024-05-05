import PropTypes from "prop-types";
import Letter from "/src/typeArea/Letter.jsx";

function Word({ text }) {
    var letters = Array.from(text).map(
        (letter, index) => <Letter key={index} letter={letter} />
    );

    return (
        <span className="word">
            {letters}
        </span>
    )
}

Word.propTypes = {
    text: PropTypes.string
}

export default Word;