import styled from 'styled-components';

export const LinkArea = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  background-color: ${props => props.$active ? 'black' : 'transparent'};
  border-radius: 10px;
  margin-bottom: 10px;

  a {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`;

export const LinkIcon = styled.img`
  width: 34px;
  height: auto;
`;
