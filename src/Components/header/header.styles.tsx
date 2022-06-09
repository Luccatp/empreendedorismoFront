import styled from "styled-components";


export const HeaderContainer = styled.div`
     height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    background-color: #000000;
    
    @media screen and (min-width: 600px) {
        height: 10rem;
        font-size: 2rem;
    }
`

export const BrandName = styled.h1`
    text-align: center;
`