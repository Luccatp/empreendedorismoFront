import  {Items}  from "../../utils/items.json"
import { AddToCartImg, CardImg, CardWrapper, MapWrapper } from "./ItemsCard.styles"
import imgAddCart from '../../utils/images/addItemToCart.jpg'



export const ItemsCard = () => {

    return(
        <MapWrapper>
            {Items.map((item:any) => (
                <CardWrapper key={item.img}>
                    <CardImg src={item.img}/>
                    <AddToCartImg src={imgAddCart}/>
                </CardWrapper>
            ))}
        </MapWrapper>
    )
}