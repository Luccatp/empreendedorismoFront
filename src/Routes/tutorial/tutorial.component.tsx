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
            <TutorialTitle>Aqui temos um tutorial sobre como tirar as medidas necessarias</TutorialTitle>
            <TutorialImage src={tutorialImage} alt='measurements'/>
            <Button children={'APRENDI!'} onClick={handleOnClick}/>
        </TutorialWrapper>
    )
}