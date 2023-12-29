import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    // sempre que tiver esse 'use', vai ser um hook (ou gancho)

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        // Esse evento JavaScript previne o comportamento padrão da página, no caso, evita que ela seja recarregada, fazendo com que se torne uma SPA 
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome: nome,
            idade: idade,
            cargo: cargo,
            imagem: imagem,
            time: time
        })

        setNome('')
        setIdade('')
        setCargo('')
        setImagem('')
    }

    // cria uma prop (propriedade) chamada 'nome', e o valor dela é
    // o que vem depois dos ':'. Exemplo: "nome: nome"

    return (
        // onSubmit: método que vai submeter o formulário, podendo acrescentar validações aos campos se necessário
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>

                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Idade"
                    placeholder="Digite sua idade"
                    valor={idade}
                    aoAlterado={valor => setIdade(valor)}
                />

                <CampoTexto obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario