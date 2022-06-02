import { AddToCartButton, BaseButton, InvertedButton } from './button.styles'


interface buttonProps {
    children:string,
    buttonType?:string,
    otherProps?:any
}

export const BUTTON_TYPE_CLASSES = {
    base:'base',
    add: 'add-to-cart',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base] : BaseButton,
        [BUTTON_TYPE_CLASSES.add] : AddToCartButton,
        [BUTTON_TYPE_CLASSES.inverted] : InvertedButton,
    }[buttonType]
)

export const Button = ({children, buttonType, ...otherProps}:buttonProps) => {
    const CustomButton = getButton(buttonType)
    return(
        <CustomButton
            {...otherProps}
            >{children}
        </CustomButton>
    )
}