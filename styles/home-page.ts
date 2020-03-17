import styled from './themed-components';

export const HomePageWrapper = styled.div`
  display: block;
  overflow-x: scroll;
  
  @media screen and (min-width: 960px) {
    height: 100vh;
    padding: 3rem;
    padding-top: 5rem;
    position: absolute;
    top: 0; 
    left: 0; 
    right: 0;
        
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    
`;

export const Column = styled.div`
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: space-between;
`;

export const Intro = styled.div`
  padding: 1rem;
  flex-grow: 2;
  text-align: center;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }

  svg {
    margin-left: 0.5rem;
  }
`;
