import { useEffect, useRef } from "react";
import Context from "./context.jsx";

function InputReader() {
    const inputReaderRef = useRef();

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
                    <form autoComplete="off" autoCapitalize="off" autoCorrect="off" id="inputReader">
                        <input ref={inputReaderRef} type="text" onBlur={focusInput} onInput={() => {
                            setUserInput(inputReaderRef.current.value);
                        }} />
                    </form>
                )}
            </Context.Consumer>
        </>
    )
}

export default InputReader;