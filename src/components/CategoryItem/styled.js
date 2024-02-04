import styled from 'styled-components';

export const Container = styled.div`
width: 80px;
height: 80px;
background-color: ${props=>props.active ? '#37C978' : '#FFF'};
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
margin-right: 10px;
cursor: pointer;
transition: all ease .3s;
&:hover {
    background-color: #37C978;
}
img {
    width: 55px;
    height: 55px;
}

`;

export const CategoryImage = styled.img`
width: 55px;
height: 55px;
border-radius: 20px;
`;