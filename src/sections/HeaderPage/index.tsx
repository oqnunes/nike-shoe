import { BiShoppingBag } from "react-icons/bi";

import ContainerHeaderPage from "./styles";

import ImageLogo from "./../../assets/images/logo_nike_shoe.png";

export default function HeaderPage() {
  return (
    <ContainerHeaderPage>
      <img src={ImageLogo} alt="Logo Nike Shoe Red" />
      <div className="content-menu">
        <div className="content-icon">
          <BiShoppingBag />
        </div>
        <div className="content-bar">
          <div className="circle">&nbsp;</div>
          <div className="circle">&nbsp;</div>
          <div className="circle">&nbsp;</div>
          <div className="circle">&nbsp;</div>
        </div>
      </div>
    </ContainerHeaderPage>
  );
}
