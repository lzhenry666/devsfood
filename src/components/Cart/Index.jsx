import React from "react";
import {CartArea, CartBody, CartHeader, CartIcon, CartText,ProductsArea, ProductPhoto, ProductsValuesArea, ProductQuantityArea, ProductsTotal,
ProductItem, ProductInfoArea, ProductName, ProductPrice,ProductQtImage,ProductQtText} from "./styled";
//import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export default function Cart() {
    const products =  useSelector(state => state.cart.products);
    const [show, setShow] = React.useState(true);
    const total = useSelector(state => state.cart.total);
    const discount = useSelector(state => state.cart.discount);
    const delivery = useSelector(state => state.cart.delivery);

    const handleCartClick = () => {
        setShow(!show);
    }
    const dispatch = useDispatch();

    const handleProductChange = (key, type)=>{
        dispatch({
          type: 'CHANGE_PRODUCT',
          payload:{
            key,
            type
          }
      })
      dispatch({ type: 'UPDATE_TOTAL' });
      dispatch({ type: 'SET_DISCOUNT' });
      dispatch({ type: 'SET_DELIVERY' });


    }

    return (
        <CartArea>
          <CartHeader onClick={handleCartClick}>
            <CartIcon src="/assets/cart.png" />
            <CartText>Meu Carrinho ({products.length})</CartText>
            { show &&
              <CartIcon src="/assets/down.png" />
            }
          </CartHeader>
          <CartBody show={show}>
            {/* <div style={{width: 50, height: 300, backgroundColor: 'red'}}/> */}
            <ProductsArea>
              { products.length > 0 &&

                products.map((item, index)=> (
                  <ProductItem key={item.id}>
                    <ProductPhoto src={ item.featured_image == null ? item.image : item.featured_image}/>
                    <ProductInfoArea>
                      <ProductName>
                        {item.name}
                      </ProductName>
                      <ProductPrice>
                        R$ {item.price.toFixed(2)}
                      </ProductPrice>
                    </ProductInfoArea>
                    <ProductQuantityArea>
                      <ProductQtImage
                       onClick={()=>handleProductChange(index,'-')}
                       src="/assets/minus.png"  />
                      <ProductQtText>{item.qt}</ProductQtText>
                      <ProductQtImage
                       onClick={()=>handleProductChange(index,'+')}
                       src="/assets/plus.png"  />
                    </ProductQuantityArea>

                  </ProductItem>
              ))}
            </ProductsArea>
            <ProductsValuesArea>

<ProductsTotal >
    Desconto: R$ {discount?.toFixed(2)}<br></br>
    Entrega: R${delivery?.toFixed(2)} <br></br>
    Total: R$ {total?.toFixed(2) + 5} <br></br>
</ProductsTotal>
</ProductsValuesArea>
          </CartBody>
        </CartArea>
      )
}
