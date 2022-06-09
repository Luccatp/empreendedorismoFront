import { useSelector } from "react-redux"
import { Button } from "../../Components/button/button.component"
import { selectMeasurements } from "../../store/measurements/measurements.selector"

import { ConfirmationTitle, ConfirmationWrapper, MeasurementConfirmation, MeasurementTitles } from "./confirmation.styles"


export const ConfirmationPage = () => {
    const measurements = useSelector(selectMeasurements)

    return(
        <ConfirmationWrapper>
            <ConfirmationTitle>Please confirm your info</ConfirmationTitle>
            <MeasurementTitles>Ombro</MeasurementTitles>
            <MeasurementConfirmation>{measurements.ombro}</MeasurementConfirmation>
            <MeasurementTitles>Cintura</MeasurementTitles>
            <MeasurementConfirmation>{measurements.cintura}</MeasurementConfirmation>
            <MeasurementTitles>Quadril</MeasurementTitles>
            <MeasurementConfirmation>{measurements.quadril}</MeasurementConfirmation>
            <MeasurementTitles>Joelho</MeasurementTitles>
            <MeasurementConfirmation>{measurements.joelho}</MeasurementConfirmation>
            <MeasurementTitles>Peito</MeasurementTitles>
            <MeasurementConfirmation>{measurements.peito}</MeasurementConfirmation>
            <MeasurementTitles>Quadril Alto</MeasurementTitles>
            <MeasurementConfirmation>{measurements.quadrilAlto}</MeasurementConfirmation>
            <MeasurementTitles>Calcanhar</MeasurementTitles>
            <MeasurementConfirmation>{measurements.calcanhar}</MeasurementConfirmation>
            <MeasurementTitles>Cintura para Joelho</MeasurementTitles>
            <MeasurementConfirmation>{measurements.cinturaPJoelho}</MeasurementConfirmation>
            <Button children="GO TO YOUR SHOP"/>
        </ConfirmationWrapper>
    )
}