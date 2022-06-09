import styled from "styled-components";

export const MapWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 50px;

@media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10rem;
}
`

export const CardWrapper = styled.div`
    height: 10rem;
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;

    @media screen and (min-width: 600px) {
        height: 20rem;
        width: 16rem;
}
`

export const CardImg = styled.img`
    height: 7rem;
    width: 5rem;
    margin-bottom: 10px;
    
    @media screen and (min-width: 600px) {
    height: 14rem;
    width: 10rem;
}
`

export const AddToCartImg = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 20px;

    :hover {
        cursor: pointer;
    }

    @media screen and (min-width: 600px) {
    height: 4rem;
    width: 4rem;
}
`