import styled from "styled-components";

const ContainerHeaderPage = styled.div`
  width: calc(100% - 40px);

  margin: 0px 20px;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 2px solid #1f79b9;

  img {
    height: 60px;

    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%);
    }
  }

  .content-menu {
    display: flex;
    align-items: center;

    gap: 30px;

    .content-icon {
      position: relative;

      .float-notify {
        position: absolute;
        top: -6px;
        right: -4px;

        width: 16px;
        height: 16px;

        border-radius: 20px;

        background-color: orange;

        color: white;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 14px;
      }
      svg {
        width: 28px;
        height: 28px;
        color: gray;

        cursor: pointer;

        color: #1f79b9;
      }
    }

    .content-bar {
      width: 30px;
      height: 30px;

      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;

      gap: 2px;

      cursor: pointer;

      .circle {
        width: 14px;
        height: 14px;

        background-color: #1f79b9;

        border-radius: 25px;
      }
    }
  }
`;

export default ContainerHeaderPage;
