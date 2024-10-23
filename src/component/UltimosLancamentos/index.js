import { useEffect, useState } from 'react'
import styled from 'styled-components'
import imagemLivro from '../../imgs/Angula.png'
import CardRecomenda from '../CardRecomenda'
import { Titulo } from '../Titulo'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    `
const NovosLivrosContainer = styled.div`
    overflow-x: scroll;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin: 20px 10px;
    padding: 10px;
    p {
        width: 200px;
    }
    img {
        border-radius: 20px;
        width: 150px;
        transition: all .3s ease;
    }
    img:hover {
        scale: 1.06;
        box-shadow: 0 0 8px #222;
    }
`
function UltimosLancamentos() {
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
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.imagem} alt='' />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos