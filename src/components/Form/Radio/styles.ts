import styled from 'styled-components';

export const RadioInputContainer = styled.div`
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  display: inline-block;
  position: relative;
  width: 100%;
  max-width: 179px;
  border: 1px solid transparent;
  transition: all .2s;
  &:hover{
    background-color: ${(props) => props.theme['base-hover']};
  }
  &[data-state='true'] {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid #8047F8;
  }
`;

export const StyledInput = styled.input<{disabled?: boolean, isSelected?: boolean}>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledLabel = styled.label<{ disabled?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 16px;
  color: ${(props) => props.theme['base-text']};
  font-size: 12px;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
  //cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  cursor: pointer;
  svg{
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme['purple-dark']} !important;
  }
  // disabled
  ${({ disabled }) =>
    disabled &&
    `
      cursor: not-allowed;
    `
  }
`;
