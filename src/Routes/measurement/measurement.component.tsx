import React, { useState } from "react"
import { Button } from "../../Components/button/button.component"
import { Header } from "../../Components/header/header.component"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { adjustMeasurements } from "../../store/measurements/measurements.action"
import { useSelector } from "react-redux"
import { selectMeasurements } from "../../store/measurements/measurements.selector"
import { TextInput } from "../../Components/textInput/index.component"
import { MeasurementsWrapper, FormWrapper, MeasurementsHeader } from "./measurement.styles"

const INITIAL_STATE = {
    ombro:"",
    peito:"",
    cintura:"",
    quadrilAlto:"",
    quadril:"",
    cinturaPJoelho:"",
    joelho:"",
    calcanhar:""
}

export const MeasurementPage = () => {
const [measurements, setMeasurements] = useState(INITIAL_STATE)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selectMeasuresLog = useSelector(selectMeasurements)

   const handleOmbroChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMeasurements({
            ...measurements,
            ombro:e.target.value
        })
   }

   const handlePeitoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMeasurements({
            ...measurements,
            peito: e.target.value
        })
    }

    const handleHipChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMeasurements({
            ...measurements,
            hip: e.target.value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //Não se esquecer de fazer o post dos dados coletados
        console.log(measurements)
        dispatch(adjustMeasurements(measurements))
        navigate('/yourShop')
    }

    return( 
        <MeasurementsWrapper>
        <Header/>
            <FormWrapper onSubmit={handleSubmit}>
            <MeasurementsHeader>Coloque suas medidas</MeasurementsHeader>
                <TextInput 
                    maxLength={undefined} 
                    value={measurements.shoulder} 
                    type={"text"} 
                    label={"ombro a ombro"} 
                    onChange={handleShoulderChange}
                />
                <TextInput 
                    maxLength={undefined} 
                    value={measurements.waist} 
                    type={"text"} 
                    label={"cintura"} 
                    onChange={handleWaistChange}
                />
                <TextInput 
                    maxLength={undefined} 
                    value={measurements.hip} 
                    type={"text"} 
                    label={"quadril"} 
                    onChange={handleHipChange}
                />
            <Button children={"Submit"}/>
            </FormWrapper>
        </MeasurementsWrapper>
    )
}