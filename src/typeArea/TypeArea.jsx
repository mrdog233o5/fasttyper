import { useContext, useState, useEffect } from "react";
import { Context } from "/src/App.jsx";
import Word from "/src/typearea/word.jsx";

function Typearea() {
    const WORDLISTLENGTH = 10000;
    const WORDSTODISPLAY = 100;
    const context = useContext(Context);
    const [wordsArr, setWordsArr] = useState([]);
    const userInput = context.userInput;
    const userInputArr = userInput.split(" ");
    const ref = (el) => {
        if (el != null) {
            // set pos
            context.setTypeareaX(el.getBoundingClientRect().left);
            context.setTypeareaY(el.getBoundingClientRect().top);
        }
    }
    const fetchWords = async (controller) => {
        try {
            const res = await fetch('/wordlist.txt', { signal: controller.signal });
            const wordlist = await res.text();
            const wordArray = wordlist.split('\n');
            var text = [];
            for (let i = 0; i < WORDLISTLENGTH; i++) {
                text.push(wordArray[Math.floor(Math.random() * wordArray.length)]);
            }
            setWordsArr(text);
        } catch (error) {
            if (error.name != 'AbortError') {
                console.error(error);
            }
        }
    };
    
    useEffect(() => {
        const controller = new AbortController();
        fetchWords(controller);
        return () => {
            controller.abort();
        };
    }, []);

    var words = [];
    for (let i = 0; i < Math.min(WORDSTODISPLAY, wordsArr.length); i++) {
        words.push(
            <Word key={i} text={wordsArr[i]} next={i < userInputArr.length && userInputArr[i] === ''} input={i < userInputArr.length ? userInputArr[i] : ''} />
        );
    }

    return (
        <div id="typearea" ref={ref}>
            {words}
        </div>
    );
}

export default Typearea;