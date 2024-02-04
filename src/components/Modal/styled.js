import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left:0;
  top:0;
  right: 0;
  bottom:0;
  background-color: rgba(0,0,0, 0.7);
  z-index: 900;
  display:${props=> props.status ? 'flex':'none'};
  justify-content: center;
  align-items:center;

  color: #136713;

  margin-right: 10px;
  transition: all ease .5s;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 50px #000;
  max-width: 100vw;
  max-height: 90vh;
  padding: 10px;
`;

export const ModalHeader = styled.div`
    width: 100%;
    border-bottom: 1px solid #CCC;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const ModalTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const ModalClose = styled.div`
    cursor: pointer;
    font-size: 30px;
    font-weight: bold;
    color: red;
`;

export const ModalContent = styled.div`
    width: 100%;
    padding: 10px;
`;
