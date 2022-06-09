import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ImgBackToMeasurement from "../../utils/images/backToMeasurement.png"
import { Header } from "../../Components/header/header.component"
import { selectMeasurements } from "../../store/measurements/measurements.selector"
import { BackToMeasurements, BackToMeasurementsImg, YourShopWrapper } from "./yourShop.styles"
import { ItemsCard } from "../../Components/ItemsCard/ItemsCard.component"

export const YourShopPage = () => {
    const navigate = useNavigate()
    const measurementSelector = useSelector(selectMeasurements)

    console.log(measurementSelector)

    const handleBackMeasurements = () => {
        navigate('/measurements')
    }
    return(
        <YourShopWrapper>
            <Header/>
            <BackToMeasurements onClick={handleBackMeasurements}>
                <BackToMeasurementsImg src={ImgBackToMeasurement} alt="Click here to go back to the measurements"/>
            </BackToMeasurements>
            <ItemsCard/>
        </YourShopWrapper>
    )
}