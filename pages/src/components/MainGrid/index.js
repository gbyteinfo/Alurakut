import styled from "styled-components";
const MainGrid = styled.main`
  width: 100%:
  grid-gap: 10px;
  margin-left:0 auto;
  margin-right:0 auto;
  max-width: 500px;
  padding: 16px;
  
  .areaProfile{
    display: none;
    @media(min-width: 860px){
      display:block;
    }
  }
  @media(min-width: 860px){
    max-width: 1110px;
    display: grid;
    grid-template-areas:"areaProfile areaWelcome areaProfileRelations";
    grid-template-columns: 160px 1fr 312px ;
  }
`;
export default MainGrid;