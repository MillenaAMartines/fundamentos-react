import React from "react";


export default props => {
    const min = 50
    const max = 70
    const gerarIdadeAleatoria = () => parseInt (Math.random() * (max - min )) + min

    return (
        <div>
            <div>Filho</div>

            <button onClick={
                function (e) {
                    props.quandoClicar('João', gerarIdadeAleatoria(), true)
                }
            }>
                Fornecer Informações
            </button>
        </div>
    )
}
