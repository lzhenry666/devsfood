import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
`;

export const Titulo = styled.h1``;

export const CategoryArea = styled.div`
    color: red;
    margin-top: 20px;
`;

export const CategoryList = styled.div`
    display: flex;
    margin-top: 10px;
`;


export const ProductArea = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
`;

export const ProductPaginationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const ProductPaginationItem = styled.div`
    background-color: ${props=>props.$active ? '#CCC' : '#FFF'};
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
`;