import styled, { css } from "styled-components"

interface Props {
    shrink:any
  }

export const Group = styled.div`
  position: relative;
  margin-bottom: 15px;
`

export const Input = styled.input`
    background: none;
    background-color: inherit;
    color: white;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: flex;
    width: 12rem;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
   

    &:focus {
      outline: none;
    }

    &:focus + label {
      top: -14px;
      font-size: 22px;
      color: white;
    }

    ::-webkit-outer-spin-button, 
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin:0;
    }

    @media screen and (min-width: 1000px) {
      font-size: 22px;
      width: 25rem;
    }
`

export const InputLabel = styled.label`
    color: white;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    @media screen and (min-width: 600px) {
      font-size: 22px;
    }
   
    ${(p:Props) => p.shrink ?
      css`
        top:-14px;
        font-size: 12px;
        color: white;
      `:
      css``}
      
`