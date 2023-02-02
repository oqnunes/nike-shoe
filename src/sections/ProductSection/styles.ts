import styled from "styled-components";

const ContainerProductionSection = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 20px;

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
`;

export { ContainerProductionSection };
