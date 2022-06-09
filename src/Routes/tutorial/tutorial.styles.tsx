import styled from "styled-components";


export const TutorialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    min-height: 100%;
    min-width: 100%;
    background-color: black;
    justify-content: space-evenly;
    align-items: center;
`

export const TutorialImage = styled.img`
    width: 100%;
    height: 20rem;
    background-color: black;

    @media screen and (min-width: 600px) {
        width: 50%;
        height: 60%;
        font-size: 2rem;
    }
`

export const TutorialTitle = styled.h2`
    color: white;
    text-align: center;
    text-decoration: underline;
    padding: 10px;

    @media screen and (min-width: 600px) {
        font-size: 3rem;
    }
`