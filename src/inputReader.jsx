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
                {({ setUserInput }) => (
                    <input autoComplete="off" autoCapitalize="off" autoCorrect="off" id="inputReader" ref={inputReaderRef} type="text" onBlur={focusInput} onInput={() => {

                        // remove multiple spaces
                        if (
                            inputReaderRef.current.value[inputReaderRef.current.value.length - 1] == " " &&
                            (
                                inputReaderRef.current.value.length == 1 ||
                                inputReaderRef.current.value[inputReaderRef.current.value.length - 2] == " "
                            )
                        ) inputReaderRef.current.value = inputReaderRef.current.value.substring(0, inputReaderRef.current.value.length - 1);

                        // update
                        setUserInput(inputReaderRef.current.value);
                    }} />
                )}
            </Context.Consumer>
        </>
    )
}

export default InputReader;