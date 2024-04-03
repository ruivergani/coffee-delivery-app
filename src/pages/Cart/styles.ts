import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  margin-top: 40px;
`;
export const InfoContainer = styled.div`
  h2{
    font-size: 18px;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 15px;
  }
  display: flex;
  gap: 15px;
  flex-direction: column;
  width: 100%;
  max-width: 604px;

`;
// Form Container
export const FormsContainer = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
`;
// Basket
export const BasketContainer = styled.div`
  width: 100%;
  max-width: 448px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  h2{
    font-size: 18px;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 15px;
  }
`;
export const BasketInfo = styled.div`
  padding: 20px 40px 40px 40px;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;
export const BasketTotalInfo = styled.div`
  width: 100%;
  p{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${(props) => props.theme['base-text']};
    text-align: left;
    font-size: 15px;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 15px;
    span{
      display: inline-block;
      color: ${(props) => props.theme['base-text']};
      text-align: right;
      font-size: 16px;
      font-weight: 400;
      line-height: 130%;
    }
  }
  .total{
    font-size: 20px;
    font-weight: 700;
    span{
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
export const CheckoutButton = styled.button`
  width: 100%;
  padding: 12px 8px;
  color: ${(props) => props.theme['base-text']};
  font-size: 14px;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  color: white;
  border-radius: 6px;
  background: #DBAC2C;
  transition: all .3s;
  &:hover{
    filter: brightness(0.9);
  }
  &:disabled{
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }
`;
export const CoffeeBasket = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;
export const CoffeeItem = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #E6E5E5;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  img{
    width: 64px;
    height: 64px;
    object-fit: cover;
  }
  .content{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .info{
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: flex-start;
      justify-content:flex-start;
      p{
        color: ${(props) => props.theme["base-subtitle"]};
        font-size: 16px;
        font-weight: 400;
        line-height: 130%;
      }
      .buttons{
        display: flex;
        align-items: flex-start;
        gap: 8px;
      }
    }
    aside{
      color: ${(props) => props.theme["base-text"]};
      text-align: right;
      font-size: 16px;
      font-weight: 700;
      line-height: 130%;
    }
  }
`;
export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 8px 10px;
  line-height: 0%;
  transition: all 0.3s;
  &:hover{
    filter: brightness(0.9 );
  }
`;
// Address Container
export const AddressContainer = styled.div`
  width: 100%;
  padding: 40px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  display: flex;
  gap: 32px;
  flex-direction: column;
`;
export const AddressContainerTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  div{
    h2{
      font-size: 16px;
      font-weight: 500;
      line-height: 130%;
      margin-bottom: 5px;
    }
    p{
      font-size: 14px;
      font-weight: 400;
      line-height: 130%;
    }
  }
`;
export const AddressFormInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`;
// Payment Container
export const PaymentContainer = styled.div`
  width: 100%;
  padding: 40px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  display: flex;
  gap: 32px;
  flex-direction: column;
`;
export const PaymentContainerTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  div{
    h2{
      font-size: 16px;
      font-weight: 500;
      line-height: 130%;
      margin-bottom: 5px;
    }
    p{
      font-size: 14px;
      font-weight: 400;
      line-height: 130%;
    }
  }
`;
export const PaymentOptions = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
`;
export const PaymentErrorMessage = styled.div`
  font-weight: 400;
  color: red;
  font-size: 14px;
`;