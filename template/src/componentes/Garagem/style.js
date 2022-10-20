import styled from "styled-components";

export const GaragemContainer = styled.main`

    border: 5px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to top left, #707070, #222);

`;


export const BotaoGaragem = styled.button`

    background-color: orange;
    padding: 10px;
    border: none;
    border-radius: 4px;
    width: 100px;
    cursor: pointer;
    margin-left: 5px;
    margin-bottom: 8px;

`;

export const TituloGaragem = styled.h1`

    border: 2px solid orangered;
    border-radius: 7px;
    margin-bottom: 10px;
    padding: 10px;
    width: 330px;
    text-align: center;
    color: orange;
    background: linear-gradient(to top left, #222, black);

`;

export const EstacionamentoGrid = styled.section`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    padding: 20px;
    margin-left: 1px;
    border: 3px solid orangered;
    border-radius: 7px;
    background: linear-gradient(to top left, #222, black);
    width: 350px;

`;

export const EstacionamentoFlex = styled.section`

    display: flex;
    gap: 40px;
    border: 2px solid gray;
    padding: 20px;

`;
