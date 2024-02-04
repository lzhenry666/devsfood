import styled from 'styled-components';

export const Container = styled.div`
    background-color: #136713;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    `;

    export const Logo = styled.img`
    width: auto;
    height: 70px;
    `;

    export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    width: ${props=>props.active ? 300 : 0}px;
    height: 50px;
    background-color: #FFF;
    background-image: url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    outline: 0;
    padding-left: 50px;
    transition: all ease .2s;
    cursor: pointer;
    font-size: 15px;
    transition: all ease .2s;
    &:focus {
        cursor: text;
    }
    `;