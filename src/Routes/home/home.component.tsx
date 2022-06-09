import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/button/button.component'
import { LogoImg } from '../../Components/logoImg/logo.component'
import { MainPageWrapper } from './home.styles'


export const HomePage = () => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/tutorial')
    }

    return(
        <MainPageWrapper>
            <LogoImg/>
            <Button children={'ENTRAR'} onClick={handleOnClick} buttonType={'home'}/>
        </MainPageWrapper>
    )
}