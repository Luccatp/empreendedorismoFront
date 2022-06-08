import { AddToCartButton, BaseButton, HomePageButton } from './button.styles'


interface buttonProps {
    children:string,
    buttonType?:string,
    otherProps?:any
    onClick?:any
}

export const BUTTON_TYPE_CLASSES = {
    base:'base',
    add: 'add-to-cart',
    home: 'home'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base] : BaseButton,
        [BUTTON_TYPE_CLASSES.add] : AddToCartButton,
        [BUTTON_TYPE_CLASSES.home] : HomePageButton,
    }[buttonType]
)

export const Button = ({children, buttonType, onClick, ...otherProps}:buttonProps) => {
    const CustomButton = getButton(buttonType)
    return(
        <CustomButton
            onClick={onClick}
            {...otherProps}
            >{children}
        </CustomButton>
    )
}