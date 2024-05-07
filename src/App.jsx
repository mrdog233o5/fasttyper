import TypeArea from './typeArea/typeArea.jsx';
import InputReader from './inputReader.jsx';
import Context from './context.jsx';
import { useState } from 'react';

function App() {
    const [userInput, setUserInput] = useState("");

    return (
        <>
            <Context.Provider value={{userInput, setUserInput}}>
                <TypeArea />
                <br /> 
                <InputReader />
            </Context.Provider>
        </>
    )
}

export default App
