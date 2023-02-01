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
      svg {
        width: 24px;
        height: 24px;
        color: gray;

        cursor: pointer;

        &:hover {
          color: #1f79b9;
        }
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
