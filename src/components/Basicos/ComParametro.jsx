
import React from "react";
export default function ComParametro(props) {     // props relacionado a propiedade de parametros 
    const status = props.note >= 7 ? "Aprovado" : "em Recuperação"
    return ( 
        <div>
            <h2>{props.Titulo}</h2>
            <p>
                <strong>{ props.aluno } </strong>
                tem nota 
                <strong> { props.nota } </strong>
                e está
                <strong> { status } </strong>
            </p>
            
        </div>
    );
}