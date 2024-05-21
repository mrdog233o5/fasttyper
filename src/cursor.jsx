import { useContext } from "react";
import { Context } from "./App";

function Cursor() {
    const context = useContext(Context);
    var x = context.lastLetterX;
    var y = context.lastLetterY;
    var styles = {
        transform: `translate(${x}px, ${y}px)`
    };
    return (
        <div id="cursor" style={styles} />
    )
}

export default Cursor;