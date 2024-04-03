import { defaultTheme } from './../../styles/themes/default';
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import { mixins } from '../../styles/mixins';

export const CardCoffee = styled.div`
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 0px 20px 20px 20px;
  width: 100%;
  max-width: 256px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .cardCoffeeImage{
    margin-top: -20px;
    margin-bottom: 12px;
  }
  .tags{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    span{
      padding: 8px;
      border-radius: 100px;
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      font-family: 'Roboto', sans-serif;
      font-size: 10px;
      font-weight: 700;
      line-height: 130%;
      text-transform: uppercase;
    }
  }
  h4{
    margin-bottom: 8px;
    margin-top: 20px;
    text-align: center;
  }
  p{
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 33px;
  }
`;
export const CardCoffeeFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .cardfooter__price{
    width: 100%;
    max-width: 70px;
    p{
      color: ${(props) => props.theme['base-text']};
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 0px;
      span{
        font-size: 14px;
        font-weight: 400;
        line-height: 130%;
      }
    }
  }
`;
// Define a styled component named OrderButton with an optional prop $itemAdded
export const OrderButton = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 8px;
    transition: all .3s;
    color: ${(props) => props.theme.white};
    background-color: ${
      // If $itemAdded is true, use the 'yellow-dark' color from the theme, otherwise use 'purple-dark'
      ({$itemAdded}) =>
      $itemAdded ? defaultTheme['yellow-dark'] : defaultTheme['purple-dark']
    };
    &:hover{
      background-color: ${
        // If $itemAdded is true, use the 'yellow' color from the theme, otherwise use 'purple'
        ({$itemAdded}) =>
        $itemAdded ? defaultTheme.yellow : defaultTheme.purple
      };
    }
  }
`;