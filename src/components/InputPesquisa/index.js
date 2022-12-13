import React from "react";
import "./InputPesquisa.css"


const InputPesquisa = (props) => {
    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }   
    return (
        <div className="mainContainer">
            <div className="inputBox">
                <input
                    className={props.className}

                    onChange={aoDigitado}
                />
                <span>{props.placeholder}</span>
            </div>
        </div>
    )
}

export default InputPesquisa;