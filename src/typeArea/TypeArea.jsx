import { useContext, useState, useEffect, useRef } from "react";
import { Context } from "/src/App.jsx";
import Word from "/src/typearea/word.jsx";

function Typearea() {
  const WORDLISTLENGTH = 10000;
  const WORDSTODISPLAY = 100;
  const context = useContext(Context);
  const [wordsArr, setWordsArr] = useState([]);
  const userInput = context.userInput;
  const userInputArr = userInput.split(" ");

  // Use a ref to store the typearea element
  const typeareaRef = useRef(null);

  useEffect(() => {
    // Set the typearea position in the context
    if (typeareaRef.current) {
      context.setTypeareaX(typeareaRef.current.getBoundingClientRect().left);
      context.setTypeareaY(typeareaRef.current.getBoundingClientRect().top);
    }
  }, [context]);

  useEffect(() => {
    const controller = new AbortController();
    fetchWords(controller);
    return () => {
      controller.abort();
    };
  }, []);

  const fetchWords = async (controller) => {
    try {
      const res = await fetch('/wordlist.txt', { signal: controller.signal });
      const wordlist = await res.text();
      const wordArray = wordlist.split('\n');
      const text = [];
      for (let i = 0; i < WORDLISTLENGTH; i++) {
        text.push(wordArray[Math.floor(Math.random() * wordArray.length)]);
      }
      setWordsArr(text);
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error(error);
      }
    }
  };

  var words = [];
  for (let i = context.wordToStartFrom; i < Math.min(WORDSTODISPLAY + context.wordToStartFrom, wordsArr.length); i++) {
    words.push(
      <Word
        key={i}
        index={i}
        text={wordsArr[i]}
        next={i < userInputArr.length && userInputArr[i] === ''}
        input={i < userInputArr.length ? userInputArr[i] : ''}
      />
    );
  }

  return (
    <div id="typearea" ref={typeareaRef}>
      {words}
    </div>
  );
}

export default Typearea;