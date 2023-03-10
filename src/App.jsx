
import './App.css';
import React from 'react';
import Mega from './components/Mega/Mega';
import Contador from './components/Contador/Contador';
import Input from './components/Comunicacao/Formulario/Input';
import IndiretaPai from './components/Comunicacao/IndiretaPai';
import DiretaPai from './components/Comunicacao/DiretaPai';
import UsuarioInfo from './components/Condicional/UsuarioInfo';
import ParOuImpar from './components/Condicional/ParOuImpar';
import TabelaProduto from './components/Repeticao/TabelaProduto';
import ListaAluno from './components/Repeticao/ListaAluno';
import Familia from './components/Basicos/Familia';
import FamiliaMembro from './components/Basicos/FamiliaMembro'
import Card from './components/Layout/Card';
import Aleatorio from './components/Basicos/Aleatorio';
import Fragmento from './components/Basicos/Fragmento';
import ComParametro from './components/Basicos/ComParametro';
import Primeiro from './components/Basicos/Primeiro';

// export default function App(props) {
//     return (
//         <div id="app">
//             <h1>Fundamentos React </h1>
//             <Fragmento></Fragmento>
//             <ComParametro
//                 Titulo="Situação do aluno"
//                 aluno="Pedro"
//                 nota={9.5}> </ComParametro>
//             <Primeiro></Primeiro>
//         </div>, 
//     )
// }
//  forma reduzida da funcao acima 

export default _ =>  //(arrow _)
    <div className="App">
        <h1>Fundamentos React </h1>

        <div className="Cards">

            <Card titulo="#14 Mega Sena" color="#00CED1">
                <Mega> </Mega>
                
            </Card>

            <Card titulo="#13 Contador" color="#FF8C00">
                <Contador numeroInicial={10}></Contador>

            </Card>

            <Card titulo="#12 Componente Controlado" color="#000080">
                <Input> </Input>

            </Card>

            <Card titulo="#11 Comunicação Indireta" color="#800080">
                <IndiretaPai>

                </IndiretaPai>
            </Card>

            <Card titulo="#10 - Comunicacao Direta " color="#708090">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#09 - Renderizacao condicional 2 " color="#DC143C">
                <UsuarioInfo usuario={{ nome: "Ana" }}></UsuarioInfo>
            </Card>

            <Card titulo="#08 - Renderizacao condicional " color="#FFD700">
                <ParOuImpar numero={20}></ParOuImpar>
            </Card>

            <Card titulo="#07 - TabelaProduto" color="#228B22">
                <TabelaProduto> </TabelaProduto>

            </Card>

            <Card titulo="#06 - Repetição" color="#8A2BE2">
                <ListaAluno></ListaAluno>
            </Card>

            <Card titulo=" #05- Componentes com filhos" color="#00C8F8">
                <Familia sobrenome="Silva">

                    <FamiliaMembro nome="Henrique"> </FamiliaMembro>
                    <FamiliaMembro nome="Millena" > </FamiliaMembro>
                    <FamiliaMembro nome="Antonia" > </FamiliaMembro>

                </Familia>
            </Card>

            <Card titulo=" #04- Desafio Aleatorio" color="#588C73">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo=" #03- Fragmento" color="#FA6900">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo=" #02- Com Parametro" color="#E94C6F">
                <ComParametro
                    Titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={9.5}>
                </ComParametro>
            </Card>

            <Card titulo=" #01- Primeiro Componente" color="#E8B71A">
                <Primeiro></Primeiro>
            </Card>

        </div>

    </div> 