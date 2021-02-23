import { useState } from "react";

interface ButtonProps {
    color: string;
    children: string;
}

export function Button(props: ButtonProps) {
    const [ counter, setCounter ] = useState(0);
    function increment(){
        return setCounter(counter+1);
    }
    return(
        <button 
            type="button" 
            style={{ backgroundColor: props.color }} 
            //style={{height: '4rem'}} 
            onClick={increment}
        >
            {/* {props.color} // exibir o texto*/}
            <span> {props.children} </span>
            
            <strong>{counter}</strong>
            
            {/* <strong>{props.color}</strong> */}
        </button>
    );
}