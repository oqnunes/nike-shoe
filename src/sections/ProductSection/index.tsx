import { useEffect } from "react";
import gsap from "gsap";

import ImageArrow from "../../assets/images/shoe/image_arrow.png";
import ImageMid from "../../assets/images/shoe/mid_group.png";
import ImageCircleYellow from "../../assets/images/shoe/yellow_circle.png";
import ImageShoe from "../../assets/images/shoe/image_shoes.png";

import Profile1 from "../../assets/images/profile/profile_1.jpg";
import Profile2 from "../../assets/images/profile/profile_2.jpg";
import Profile3 from "../../assets/images/profile/profile_3.jpg";

import ImgShoe2 from "../../assets/images/shoe_2.png";
import ImgShoe3 from "../../assets/images/shoe_3.png";

import { ContainerProductionSection } from "./styles";

export default function ProductSection() {
  useEffect(() => {
    const bodySelector = window.document.getElementById("root");

    gsap.to(bodySelector, {
      opacity: 1,
      delay: 2,
      duration: 1,
    });
  }, []);

  return (
    <ContainerProductionSection>
      <div className="content-left">
        <div className="yellow-text">CR7 Collection</div>
        <div className="big-title">
          Nike <span>devil jordan</span> Code Blue
        </div>
        <div className="mini-description">
          Nike's devil are considerd one the luckiest shoes for footballers.
        </div>
      </div>
      <div className="content-right">
        <img
          src={ImageArrow}
          className="image_circle_arrow"
          alt="Circle Blue Arrow"
        />
        <img
          src={ImageMid}
          className="image_circle_mid"
          alt="Circle Blue Arrow"
        />
        <img
          src={ImageCircleYellow}
          className="image_circle_yellow"
          alt="Circle Blue Arrow"
        />
        <img src={ImageShoe} className="image_shoe" alt="Circle Blue Arrow" />
      </div>
      <div className="content-bottom-area">
        <div className="content-left-dashed">
          <div className="column-text">
            <div className="bold">João, Fernando e outras 256 pessoas.</div>
            <div>Eles estão tendo uma vida melhor</div>
          </div>
          <div className="column-images">
            <img
              src={Profile1}
              className="profile_picture"
              alt="Circle Profile"
            />
            <img
              src={Profile2}
              className="profile_picture"
              alt="Circle Profile"
            />
            <img
              src={Profile3}
              className="profile_picture"
              alt="Circle Profile"
            />
            <div className="content_circle_value">+200</div>
          </div>
        </div>
        <div className="content-right-bottom">
          <div className="content-mini-img">
            <img src={ImageShoe} alt="First Shoe" />
          </div>
          <div className="content-mini-img">
            <img src={ImgShoe3} alt="Three Shoe" />
          </div>
          <div className="content-mini-img">
            <img src={ImgShoe2} alt="Second Shoe" />
          </div>
        </div>
      </div>
    </ContainerProductionSection>
  );
}
