import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;

  box-sizing: border-box;
}

body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
`;

export const ContainerLandingPage = styled.div`
  width: 100%;
  max-width: 1080px;
`;
