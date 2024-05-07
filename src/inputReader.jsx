import { useEffect, useRef } from "react";

function InputReader() {
    const inputReaderRef = useRef();

    function focusInput() {
        inputReaderRef.current.focus();
    }

    useEffect(() => {
        focusInput();
    });

    return (
        <input ref={inputReaderRef} type="text" onBlur={focusInput} />
    )
}

export default InputReader;