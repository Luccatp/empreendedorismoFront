import styled from "styled-components";

export const YourShopWrapper = styled.div`
    min-height: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BackToMeasurements = styled.div`
    height: 2rem;
    width: 2rem;
    position: fixed;
    top: 3rem;
    right: 2rem;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        cursor: pointer;
    }

    @media screen and (min-width: 600px) {
        height: 6rem;
        width: 6rem;
    }
`

export const BackToMeasurementsImg = styled.img`
    height: 2rem;
    border-radius: 20px;

    @media screen and (min-width: 600px) {
        height: 6rem;
    }
`