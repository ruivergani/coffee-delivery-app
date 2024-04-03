import styled from 'styled-components';

// Section Success
export const SectionSuccess = styled.main`
  padding-top: 80px;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`
// Text Success
export const SectionSuccessText = styled.div`
  h2{
    padding-bottom: 4px;
  }
  h4{
    margin-bottom: 40px;
  }
  ul{
    display: flex;
    gap: 32px;
    flex-direction: column;
    padding: 40px;
    border-radius: 6px 36px;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    li{
      display: flex;
      gap: 12px;
      align-items: center;
      p{
        width: 100%;
        max-width: 300px;
        line-height: 130%;
      }
    }
  }
`;
export const SectionSuccessImage = styled.div`

`;

// h2 {
//   ${mixins.fonts.titleL};
//   color: ${({ theme }) => theme.colors['yellow-dark']};
// }