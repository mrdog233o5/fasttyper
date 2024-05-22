import { useContext } from "react";
import { Context } from "/src/App.jsx";

function Cursor() {
    const context = useContext(Context);
    var x = context.lastLetterX;
    var y = context.lastLetterY;
    var typeareaX = context.typeareaX;
    var typeareaY = context.typeareaY;
    var styles = {
        transform: `translate(${x - typeareaX}px, ${y - typeareaY}px)`
    };
    return (
        <div id="cursor" style={styles} />
    )
}

export default Cursor;