import"./Mega.css"
import React, {useState} from "react";

export default props => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio

    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)   // apos a seguencia de numeros organizar em ordem. s
        return numeros
    }

    const qtde = props.qtde || 6
    const numeroInicial = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numeroInicial)


    // inicia com array vazio e vai complementando o  array com cada novo numero gerado ate implementar ele todo.  
    // [52 ]  ===> [52, 40 ..... ] ate completar as 6 casas 

    return (
        <div>
            <h2>Mega</h2>
            <h3> {numeros.join(" ")}</h3>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}> Sortear </button>

        </div>
    ); 
}