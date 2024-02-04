import styled from 'styled-components';

export  const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;
export  const Menu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #136713;
  width: 80px;
  justify-content: center;
  align-items: center;
`;

export  const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #00980d;
  background-image: url('./assets/bg.png');
  flex: 1;
  overflow-y: auto;
`;