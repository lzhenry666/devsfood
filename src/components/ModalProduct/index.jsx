
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import {
    Container,
    ProductArea,
    ProductInfoArea,
    ProductPhoto,
    ProductQuantityArea,
    ProductDetails,
    ProductButtons,
    ProductName,
    ProductIngredients,
    ProductButton,
    ProductPrice,
    ProductQtImage,
    ProductQtText,
    ProductQuantity
  } from './styled';
const ModalProduct = ({data, setStatus}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.products);
    const [qt, setQt] = React.useState(1);

    React.useEffect(()=>{
      setQt(1);
    },[data])

    const handleCancelButton = () => {
      setQt(1);
      setStatus(false);
    }

    const handleMinusQt = () => {

      if ( qt > 1){
        setQt(qt - 1);
      }
    }

    const handlePlusQt = () => {
      setQt(qt + 1);
    }

    const handleAddToCart = () => {

      dispatch({
        type: 'ADD_PRODUCT',
        payload: { data, qt }
      })
      console.log('testeeee',cart);
      setStatus(false);
      setQt(1);
    }

    return (
    <Container >
    <ProductArea>
      <ProductPhoto src={data.image != "null" ? data.image : data.featured_image} />
      <ProductInfoArea>
        <ProductDetails>
          <ProductName>{data.name}</ProductName>
          <ProductIngredients>{data.ingredients}</ProductIngredients>
        </ProductDetails>
        <ProductQuantityArea>
          <ProductQuantity>
            <ProductQtImage src="/assets/minus.png" onClick={handleMinusQt} />
            <ProductQtText>{qt}</ProductQtText>
            <ProductQtImage src="/assets/plus.png" onClick={handlePlusQt} />
          </ProductQuantity>
          <ProductPrice>
            R$ {(data.price * qt).toFixed(2)}
          </ProductPrice>
        </ProductQuantityArea>
      </ProductInfoArea>
    </ProductArea>
    <ProductButtons>
      <ProductButton small={true} onClick={handleCancelButton}>Cancelar</ProductButton>
      <ProductButton small={false} onClick={handleAddToCart}>Adicionar ao Carrinho</ProductButton>
    </ProductButtons>
  </Container>
  )
}

export default ModalProduct
