import styled from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    align-items: center;
    width: 100%;  
`
const Botao = styled.button`
    background-color: #EB9B00;
    border-radius: 12px;
    color: #FFF;
    padding: 10px 0px;
    font-size: 18px;
    border: none;
    font-weight: 600;
    display: block;
    text-align: center;
    width: 150px;
    transition: all .4s ease;
    font-family: 'Rethink Sans';

    &:hover {
        cursor: pointer;
        background-color: #eee;
        color: #EB9B00;
    }
`
const Descricao = styled.p`
    max-width: 300px;
`
const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 22px;
    font-weight: bold;
    margin: 15px 0;
`
const ImgLivro = styled.img`
    width: 150px;
    border-radius: 12px;
`
function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="16px" cor="#EB9B00" alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img} alt=''/>
                <Botao>Saiba mais</Botao>
            </div>
        </Card>  
    )
}

export default CardRecomenda