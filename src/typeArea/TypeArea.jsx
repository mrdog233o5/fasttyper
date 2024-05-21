import { useContext } from "react";
import { Context } from "../App";
import Cursor from "../cursor.jsx";
import Word from "/src/typeArea/word.jsx"; 

function TypeArea() {
    const context = useContext(Context);
    var userInput = context.userInput;
    var userInputArr = userInput.split(" ");
    var text = "Hello world apple banana pear potato";
    var textArr = text.split(" ");
    console.log(userInputArr);
    var words = textArr.map(
        (word, index) => 
        <Word key={index} text={word} next={userInputArr[index] == "" && userInputArr[index - 1] != undefined} input={index < userInputArr.length ? userInputArr[index] : ""} />
    )
    
    return (
        <div>
            <Cursor />
            {words}
        </div>
    );
}

export default TypeArea;