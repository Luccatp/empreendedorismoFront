import React, { useEffect, useState } from "react"
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
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const measurementSelector = useSelector(selectMeasurements)

    const [measurements, setMeasurements] = useState(INITIAL_STATE)

    useEffect(() => {
        if(measurementSelector !== undefined) {
            setMeasurements(measurementSelector)
        }
    }, [measurementSelector])

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

    const handleCinturaChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMeasurements({
            ...measurements,
            cintura: e.target.value
        })
    }

    const handleQuadrilChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMeasurements({
            ...measurements,
            quadril: e.target.value
        })
    }

    const handleQuadrilAltoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMeasurements({
            ...measurements,
            quadrilAlto: e.target.value
        })
    }

    const handleCinturaPJoelhoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMeasurements({
            ...measurements,
            cinturaPJoelho: e.target.value
        })
    }
    
    const handleJoelhoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMeasurements({
            ...measurements,
            joelho: e.target.value
        })
    }

    const handleCalcanharChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMeasurements({
            ...measurements,
            calcanhar: e.target.value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //Não se esquecer de fazer o post dos dados coletados
        console.log(measurements)
        dispatch(adjustMeasurements(measurements))
        navigate('/confirmation')
    }

    return( 
        <MeasurementsWrapper>
        <Header/>
            <FormWrapper onSubmit={handleSubmit}>
            <MeasurementsHeader>Coloque suas medidas</MeasurementsHeader>
                <TextInput 
                    maxLength={2} 
                    value={measurements.ombro} 
                    type={"number"} 
                    label={"ombro a ombro"} 
                    onChange={handleOmbroChange}
                />
                <TextInput 
                    maxLength={2} 
                    value={measurements.cintura} 
                    type={"number"} 
                    label={"cintura"} 
                    onChange={handleCinturaChange}
                />
                <TextInput 
                    maxLength={2} 
                    value={measurements.quadril} 
                    type={"number"} 
                    label={"quadril"} 
                    onChange={handleQuadrilChange}
                />
                <TextInput 
                    maxLength={2} 
                    value={measurements.joelho} 
                    type={"number"} 
                    label={"joelho"} 
                    onChange={handleJoelhoChange}
                />
                <TextInput 
                    maxLength={2} 
                    value={measurements.peito} 
                    type={"number"} 
                    label={"peito"} 
                    onChange={handlePeitoChange}
                />
                <TextInput 
                    maxLength={2} 
                    value={measurements.quadrilAlto} 
                    type={"number"} 
                    label={"quadril Alto"} 
                    onChange={handleQuadrilAltoChange}
                />
                <TextInput 
                    maxLength={2} 
                    value={measurements.calcanhar} 
                    type={"number"} 
                    label={"calcanhar"} 
                    onChange={handleCalcanharChange}
                />
                <TextInput 
                    maxLength={2} 
                    value={measurements.cinturaPJoelho} 
                    type={"number"} 
                    label={"cintura p/ joelho"} 
                    onChange={handleCinturaPJoelhoChange}
                />
            <Button children={"Submit"}/>
            </FormWrapper>
        </MeasurementsWrapper>
    )
}