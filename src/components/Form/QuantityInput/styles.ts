import styled from 'styled-components';

export const QuantityInputContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  button{
    background-color: transparent !important;
    color: ${(props) => props.theme['purple']} !important;
    display: flex;
    align-items: center;
    transition: all .2s;
    &:hover{
      color: ${(props) => props.theme['purple-dark']};
    }
  }
  :focus{
    box-shadow: none !important;
  }
`;

