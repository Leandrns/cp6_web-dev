import Header from '../component/Header'
import AppContainer from '../component/AppContainer'
import styled from 'styled-components';

const BotoesFiltro = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`

const Botao = styled.button`
  width: 200px;
  padding: 10px;
  font-family: 'Rethink Sans';
  font-weight: 600;
  font-size: 16px;
  border: solid 3px #333;
  border-radius: 10px;
  transition: all .3s ease;
  cursor: pointer;

  &:hover {
    background-color: #333;
    border-color: white;
    color: white;
  }
`

const Titulo = styled.h1`
  color: white;
  text-align: center;
`

const Categorias = () => {
  return (
    <AppContainer>
      <Header />
      <Titulo>CATEGORIAS</Titulo>
      <BotoesFiltro>
        <Botao>Front-End</Botao>
        <Botao>Back-End</Botao>
        <Botao>Bancos de Dados</Botao>
        <Botao>Outros</Botao>
      </BotoesFiltro>
    </AppContainer>
  );
}

export default Categorias