
import "./TabelaProduto.css"
import React from "react";
import produtos from "../../data/produtos";

export default props => {

    function getLinhas() {
        return produtos.map(produto => {
            return (
                <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.valor}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>valor</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>

            </table>
        </div>


    )
}
