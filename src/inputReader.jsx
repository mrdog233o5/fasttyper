import { useEffect, useRef } from "react";
import { Context } from "/src/App.jsx";

function InputReader() {
    const inputReaderRef = useRef();

    // auto focus
    const focusInput = () => {
        inputReaderRef.current.focus();
    }
    useEffect(() => {
        focusInput();
    });

    return (
        <>
            <Context.Consumer>
                {({ userInput, setUserInput, wordToStartFrom }) => (
                    <input autoComplete="off" autoCapitalize="off" autoCorrect="off" id="inputReader" ref={inputReaderRef} type="text" onBlur={focusInput} onInput={() => {

                        // remove multiple spaces
                        if (
                            inputReaderRef.current.value[inputReaderRef.current.value.length - 1] == " " &&
                            (
                                inputReaderRef.current.value.length == 1 ||
                                inputReaderRef.current.value[inputReaderRef.current.value.length - 2] == " "
                            )
                        ) inputReaderRef.current.value = userInput;

                        if (inputReaderRef.current.value.split(" ").length == wordToStartFrom) inputReaderRef.current.value = userInput;

                        // update
                        setUserInput(inputReaderRef.current.value);
                    }} />
                )}
            </Context.Consumer>
        </>
    )
}

export default InputReader;