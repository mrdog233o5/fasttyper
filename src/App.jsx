import TypeArea from './typeArea/typeArea.jsx';
import InputReader from './inputReader.jsx';
import React, { useState } from 'react';

export const Context = React.createContext("");

function App() {
    const [userInput, setUserInput] = useState("");
    const [lastLetterX, setLastLetterX] = useState(0);
    const [lastLetterY, setLastLetterY] = useState(0);

    return (
        <>
            <Context.Provider value={{userInput, setUserInput, lastLetterX, setLastLetterX, lastLetterY, setLastLetterY}}>
                <TypeArea />
                <br /> 
                <InputReader />
            </Context.Provider>
        </>
    )
}

export default App
