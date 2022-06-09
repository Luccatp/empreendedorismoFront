import styled from "styled-components";

export const MapWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
`

export const CardWrapper = styled.div`
    height: 10rem;
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
`

export const CardImg = styled.img`
    height: 7rem;
    width: 5rem;
`

export const AddToCartImg = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 20px;
`