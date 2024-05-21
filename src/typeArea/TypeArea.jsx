import { useContext, useState, useEffect } from "react";
import { Context } from "../App";
import Cursor from "../cursor.jsx";
import Word from "/src/typeArea/word.jsx";

function TypeArea() {
    const context = useContext(Context);
    const [words, setWords] = useState([]);
    const userInput = context.userInput;
    const userInputArr = userInput.split(" ");

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const res = await fetch('/wordlist.txt');
                const wordlist = await res.text();
                const wordArray = wordlist.split('\n');
                setWords(
                    wordArray.map((word, index) => (
                        <Word
                        key={index}
                        text={word}
                        next={index < userInputArr.length && userInputArr[index] === ''}
                        input={index < userInputArr.length ? userInputArr[index] : ''}
                        />
                    ))
                );
            } catch (error) {
                console.error(error);
            }
        };

        fetchWords();
    }, [userInputArr]);

    return (
        <div id="typearea">
            <Cursor />
            {words}
        </div>
    );
}

export default TypeArea;