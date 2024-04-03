import styled from 'styled-components';

// Header
export const HeaderContainer = styled.header`
  padding: 32px 0px;
  background-color: ${(props) => props.theme['background-default']};
  position: sticky;
  top: 0;
  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
// Nav
export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-direction: row;
  a{
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 6px;
    border: 1px solid transparent;
    transition: all .3s;
  }
  a{
    position: relative;
    span{
      background-color: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
      border-radius: 50%;
      width: 20px;
      height: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      p{
        font-size: 12px;
        font-weight: bold;
        line-height: 100%;
      }

      position: absolute;
      top: -10px;
      right: -10px;
    }
  }
  a[title="location"]{
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    position: relative;
    cursor: default !important;
    &:hover{
      filter: brightness(0.9);
    }
  }
  a[title="cart"]{
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    &:hover{
      filter: brightness(0.9);
    }
  }
  .disabled{
    cursor: not-allowed !important;
    pointer-events: none;
  }
`;