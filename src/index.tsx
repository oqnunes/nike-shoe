import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles, ContainerLandingPage } from "./styles";
import HeaderPage from "./sections/HeaderPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ContainerLandingPage>
      <HeaderPage />
    </ContainerLandingPage>
  </React.StrictMode>
);
