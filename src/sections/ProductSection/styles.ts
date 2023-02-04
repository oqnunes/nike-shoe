import styled from "styled-components";

const ContainerProductionSection = styled.div`
  width: 100%;
  height: 560px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 0px 40px;

  font-family: "Karla", sans-serif;

  .content-left {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    .yellow-text {
      background-color: #fecf23;
      padding: 6px 12px;

      border-radius: 4px;

      margin-bottom: 10px;

      cursor: pointer;
    }
    .big-title {
      font-size: 74px;
      font-weight: 800;
      line-height: 78px;
      span {
        color: #1f79b9;
      }
    }
    .mini-description {
      width: 80%;
      font-size: 20px;

      margin-top: 20px;
    }
  }

  .content-right {
    width: 500px;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    .image_circle_arrow {
      width: 100%;

      position: absolute;
      animation: rotating_middle 20s linear infinite;
    }
    .image_circle_mid {
      width: calc(100% - 80px);
      position: absolute;
      animation: rotating 60s linear infinite;
    }
    .image_circle_yellow {
      width: calc(100% - 160px);
      position: absolute;
    }
    .image_shoe {
      width: calc(100% - 160px);
      position: absolute;
      right: 60px;
      top: 60px;
      transform: rotate(10deg);
      animation: rotating_middle_shoe 10s linear infinite;
      transition: all 0.3s ease-out;

      cursor: pointer;
    }
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rotating_middle {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-30deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes rotating_middle_shoe {
    0% {
      transform: rotate(10deg);
    }
    25% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }

  .content-bottom-area {
    width: 100%;

    display: flex;
    align-items: center;

    justify-content: space-between;

    .content-left-dashed {
      width: 100%;
      max-width: 500px;
      height: 80px;

      border-radius: 60px;

      border: 2px dashed #1f79b9;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0px 12px 0px 24px;

      cursor: pointer;

      .column-text {
        font-size: 14px;
        .bold {
          font-weight: bold;
          font-size: 16px;
        }
      }

      .column-images {
        width: 150px;
        height: 80px;

        position: relative;

        img {
          width: 60px;
          height: 60px;

          border-radius: 100%;

          position: absolute;
          left: 0;
          top: 10px;

          border: 2px solid white;

          &:nth-child(2) {
            left: 30px;
          }
          &:nth-child(3) {
            left: 60px;
          }
        }

        .content_circle_value {
          width: 60px;
          height: 60px;

          border-radius: 100%;

          position: absolute;
          left: 0;

          border: 2px solid white;

          background-color: #1f79b9;
          left: 90px;
          top: 10px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: white;
        }
      }
    }

    .content-right-bottom {
      width: 100%;

      height: 120px;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .content-mini-img {
        width: 120px;
        height: 120px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 16px;

        background-color: #fecf23;

        cursor: pointer;

        img {
          width: 80%;

          transition: all 0.2s ease-in-out;

          &:hover {
            transform: scale(1.6);
          }
        }

        &:nth-child(2) {
          background-color: #bed81e;
        }
        &:nth-child(3) {
          background-color: #f0e3ff;
        }
      }
    }
  }
`;

export { ContainerProductionSection };
