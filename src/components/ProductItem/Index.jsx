import React from "react";
import {Container,
    ProductPhotoArea,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductsIngredients,
    ProductButtonArea,
    ProductButton
} from "./styled";

 const ProductItem  = ({data, onClick })=> {
    let active = window.location.pathname === data.link;

    const handleClick = () => {
        onClick(data);
    }
    return (
        <Container  className="nav-link" $active={active}
        onClick={handleClick}
        >
            <ProductPhotoArea>
                <ProductPhoto src={data.image} />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R${data.price}</ProductPrice>
                <ProductsIngredients>{data.ingredients}</ProductsIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png" />
            </ProductButtonArea>


    </Container>

    );
}
export default ProductItem;
