import React, { useState } from "react"
import { Button } from "../../Components/button/button.component"
import { Header } from "../../Components/header/header.component"
import { TextInput } from "../../Components/textInput/index.component"
import { FormWrapper, HomePageWrapper } from "./home.styles"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { adjustMeasurements } from "../../store/measurements/measurements.action"
import { useSelector } from "react-redux"
import { selectMeasurements } from "../../store/measurements/measurements.selector"

const INITIAL_STATE = {
    braco:"",
    cintura:""
}

export const HomePage = () => {
const [measurements, setMeasurements] = useState(INITIAL_STATE)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selectMeasuresLog = useSelector(selectMeasurements)
   const handleBracoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMeasurements({
            ...measurements,
            braco:e.target.value
        })
   }

   const handleCinturaChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMeasurements({
            ...measurements,
            cintura: e.target.value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //Não se esquecer de fazer o post dos dados coletados
        //navigate('/yourShop')
        console.log(measurements)
        console.log(selectMeasuresLog.braco)
        dispatch(adjustMeasurements(measurements))
    }

    return( 
        <HomePageWrapper>
        <Header/>
            <FormWrapper onSubmit={handleSubmit}>
            <h1>Coloque suas medidas</h1>
            <TextInput 
                maxLength={undefined} 
                value={measurements.braco} 
                type={"text"} 
                label={"braço"} 
                onChange={handleBracoChange}
            />
            <TextInput 
                maxLength={undefined} 
                value={measurements.cintura} 
                type={"text"} 
                label={"cintura"} 
                onChange={handleCinturaChange}
            />
            <Button children={"Submit"}/>
            </FormWrapper>
        </HomePageWrapper>
    )
}