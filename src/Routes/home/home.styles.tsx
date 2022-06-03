import styled from 'styled-components'

export const HomePageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    min-height: 100%;
    min-width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
` 

export const FormWrapper = styled.form`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
`