import styled from 'styled-components'

export const MeasurementsWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    min-height: 100%;
    min-width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
` 

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
    overflow-y: hidden;
`

export const InputWrapper = styled.div`
    margin-bottom: 15px;
`

export const MeasurementsHeader = styled.h2`
    color:white;
    margin-bottom: 3rem;
`