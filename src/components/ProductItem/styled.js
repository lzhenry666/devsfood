import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    padding: 10px;
    display: flex;
    align-items: center;
    color: #136713;

`;

/*

    ProductsIngredients,
    ProductButtonArea,
    ProductButton */
    export const ProductPhotoArea = styled.div`
    width: 180px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
    margin-right: 10px;
`;

export const ProductPhoto = styled.img`
    width: 100%;
`;

export const ProductName = styled.div`
    font-size: 2.2rem;
`;
export const ProductPrice = styled.div`
font-size: 2.2rem;
`;
export const ProductsIngredients = styled.div`
    margin-top: 20px;
`;
export const ProductButtonArea = styled.div`
    margin-top: 20px;
`;
export const ProductButton = styled.img`
    width: 80px;
`;
