import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/button/button.component'
import tutorialImage from '../../utils/images/tutorial.png'
import { TutorialImage, TutorialTitle, TutorialWrapper } from './tutorial.styles'


export const TutorialPage = () => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/measurements')
    }

    return(
        <TutorialWrapper>
            <TutorialTitle>Esse é o tutorial de como tirar todas as medidas do seu corpo</TutorialTitle>
            <TutorialImage src={tutorialImage} alt='measurements'/>
            <Button children={'ENTENDIDO'} onClick={handleOnClick}/>
        </TutorialWrapper>
    )
}