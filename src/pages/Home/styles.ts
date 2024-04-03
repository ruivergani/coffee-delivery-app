import styled from 'styled-components';

export const ContentContainer = styled.section`
  padding-top: 32px;
  padding-bottom: 157px;
  .container{
    display: flex;
    gap: 54px;
    flex-direction: column;
  }
`;
export const AllCoffee = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px 40px;
`;