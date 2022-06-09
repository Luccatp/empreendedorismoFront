import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button } from "../../Components/button/button.component"
import { Header } from "../../Components/header/header.component"
import { selectMeasurements } from "../../store/measurements/measurements.selector"
import { BackToMeasurements } from "./yourShop.styles"

export const YourShopPage = () => {
    const navigate = useNavigate()
    const measurementSelector = useSelector(selectMeasurements)

    console.log(measurementSelector)

    const handleBackMeasurements = () => {
        navigate('/measurements')
    }
    return(
        <div>
            <Header/>
            <BackToMeasurements onClick={handleBackMeasurements}>-</BackToMeasurements>
        </div>
    )
}