import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Input from '../Input'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    height: 500px;
    padding: 50px 0;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 42px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 40px;
`

const ResultadosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    transition: all 0.3s ease;
    padding: 12px;
    text-align: left;
    cursor: pointer;
    p {
        width: 200px;
        margin-left: 12px;
    }
    img {
        width: 120px;
        border-radius: 8px;
    }
    &:hover {
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }
    .titulo {
        font-weight: 650;
        font-size: 20px;
    }
    .resumo {
        font-size: 12px;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json');
            const data = await response.json();
            setLivros(data);
        };
        fetchData();
    }, []);

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onChange={evento => {
                    const textoDigitado = evento.target.value.toLowerCase();
                    if (textoDigitado === '') {
                        setLivrosPesquisados([]);
                    } else {
                        const resultadoPesquisa = livros.filter(livro =>
                            livro.titulo.toLowerCase().includes(textoDigitado)
                        );
                        setLivrosPesquisados(resultadoPesquisa);
                    }
                }}
            />
            <ResultadosContainer>
                {livrosPesquisados.map(livro => (
                    <Resultado key={livro.id}>
                        <img src={livro.imagem} alt={livro.titulo} />
                        <div className='textos'>
                            <p className='titulo'>{livro.titulo}</p>
                            <p className='resumo'>{livro.resumo}</p>
                        </div>
                    </Resultado>
                ))}
            </ResultadosContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa