import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/button/button.component'
import HomeLogo from './../../utils/images/MEASURE_1.png'
import { ImageHomePage, MainPageWrapper } from './home.styles'


export const HomePage = () => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/tutorial')
    }

    return(
        <MainPageWrapper>
        <ImageHomePage src={HomeLogo} alt='aa'/>
        <Button children={'ENTRAR'} onClick={handleOnClick} buttonType={'home'}/>
        </MainPageWrapper>
    )
}