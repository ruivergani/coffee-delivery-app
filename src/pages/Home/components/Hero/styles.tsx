import styled from 'styled-components';

// Section Hero
export const SectionHero = styled.section`
  padding: 94px 0px;
  .container{
    display: flex;
    justify-content: space-between;
    gap: 56px;
    align-items: flex-start;
  }
`;
// Text Hero
export const SectionHeroText = styled.div`
  width: 100%;
  max-width: 600px;
  h1{
    padding-bottom: 16px;
  }
  h4{
    font-weight: 400;
  }
  ul{
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 30px;
    li{
      display: flex;
      align-items: center;
      gap: 12px;
      .icon{
        padding: 6px;
        border-radius: 50%;
        background-color: ${(props) => props.theme['purple-light']};
        color: ${(props) => props.theme['purple-dark']};
      }
      p{
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`;