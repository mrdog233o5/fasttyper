import Typer from './typer';
import InputReader from '/src/inputReader.jsx';
import React, { useState } from 'react';

export const Context = React.createContext("");

function App() {
    const [userInput, setUserInput] = useState("");
    const [wordToStartFrom, setWordToStartFrom] = useState(0);
    const [lastLetterX, setLastLetterX] = useState(0);
    const [lastLetterY, setLastLetterY] = useState(0)
    const [typeareaX, setTypeareaX] = useState(0);
    const [typeareaY, setTypeareaY] = useState(0);
    const [lineCleared, setLineCleared] = useState(false);

    return (
        <>
            <Context.Provider value={{
                    userInput,
                    setUserInput,
                    wordToStartFrom,
                    setWordToStartFrom,
                    lastLetterX,
                    setLastLetterX,
                    lastLetterY,
                    setLastLetterY,
                    typeareaX,
                    setTypeareaX,
                    typeareaY,
                    setTypeareaY,
                    lineCleared,
                    setLineCleared
                }}>
                <Typer />
                <br /> 
                <InputReader />
            </Context.Provider>
        </>
    )
}

export default App
