import React from "react";
import ReactDOM from "react-dom/client";

import HeaderPage from "./sections/HeaderPage";
import ProductSection from "./sections/ProductSection";

import { GlobalStyles, ContainerLandingPage } from "./styles";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ContainerLandingPage>
      <HeaderPage />
      <ProductSection />
    </ContainerLandingPage>
  </React.StrictMode>
);
