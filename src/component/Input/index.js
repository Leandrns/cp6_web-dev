import styled from "styled-components"

const Input = styled.input`
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 50px;
    border-radius: 50px;
    width: 400px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 30px;
    font-family: 'Rethink Sans';
    transition: all .5s ease;
    text-align: center;

    &::placeholder {
        color: #FFF;
        font-size: 14px;
    }

    &:focus {
        scale: 1.05;
    }
`

export default Input