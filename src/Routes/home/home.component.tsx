import { useState } from "react"
import { Button } from "../../Components/button/button.component"
import { Header } from "../../Components/header/header.component"
import { TextInput } from "../../Components/textInput/index.component"
import { FormWrapper, HomePageWrapper } from "./home.styles"


export const HomePage = () => {
    const INITIAL_STATE = {
        braco:23,
        cintura:20,
    }
   const [medidas, setMedidas] = useState(INITIAL_STATE)

   console.log(medidas)
    return( 
        <HomePageWrapper>
        <Header/>
            <FormWrapper>
            <h1>Coloque suas medidas</h1>
            <TextInput 
                maxLength={undefined} 
                value={""} 
                type={""} 
                label={"braço"} 
                onChange={() => null}
            />
            <TextInput 
                maxLength={undefined} 
                value={""} 
                type={""} 
                label={"cintura"} 
                onChange={() => null}
            />
            <Button children={"Submit"}/>
            </FormWrapper>
        </HomePageWrapper>
    )
}