import styled from "styled-components";

export const BaseButton = styled.button`
    height: 2rem;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    box-shadow: #9943a7 0px 1.5px;
    margin-bottom: 10px;

    :hover {
        cursor: pointer;
    }

    @media screen and (min-width: 600px) {
        height: 3rem;
        width: 7rem;
        font-size: 1.3rem;
    }
`

export const AddToCartButton = styled.button`

`

export const HomePageButton = styled.button`
    height: 2rem;
    width: 5rem;
    border-radius: 10px;
    border: 1px solid #4e4e4e;
    background-color: #9943a7;
    font-family: 'Bebas Neue';
    font-size: 15px;
    text-align: center;
    color: white;
    text-shadow: black 1.5px 1.5px;
    box-shadow: #eeeeee 0px 1.5px;

    :hover {
        cursor: pointer;
    }

    @media screen and (min-width: 600px) {
        height: 3rem;
        width: 7rem;
        font-size: 2rem;
    }
`