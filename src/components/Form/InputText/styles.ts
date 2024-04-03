import styled from 'styled-components';
import { css } from 'styled-components';

// Box Component
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
interface InputStyleProps{
  haserror: boolean;
}
// Input Component
export const InputWrapper = styled.label<InputStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  transition: all .2s;
  // Optional
  span{
    color: ${(props) => props.theme['base-label']};
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: 130%;
    margin-right: 10px;
  }
  /* Error Border (if hasError the css will be applied) */
  ${(props) => props.haserror && css`
    border-color: red !important;
  `}
  // States
  &[data-state='focused']{
    border-color: ${(props) => props.theme['yellow-dark']};
  }
  &[data-state='blurred']{
    border-color: ${(props) => props.theme['base-button']};
  }
  input{
    width: 100%;
    background-color: ${(props) => props.theme['base-input']};
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    &:focus{
      outline: none;
      box-shadow: none;
    }
    &::placeholder{
      color: ${(props) => props.theme['base-text']};
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 130%;
    }
  }
`;

// Error Component
export const ErrorMessage = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: red;
  font-size: 12px;
`