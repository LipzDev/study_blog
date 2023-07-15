import styled from "styled-components";
import theme from "../../styles/theme";

export const Form = styled.form`
  input[type="file"] {
    margin-bottom: 40px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;

  span {
    cursor: pointer;
    position: relative;
    left: 3px;
    top: 0.5px;

    path {
      fill: ${theme.colors.gray};
    }

    :hover {
      path {
        fill: red;
      }
    }
  }

  img {
    min-width: 60px;
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;

    cursor: pointer;
    /* width: 30%; */

    p {
      max-width: 14rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    span {
      color: red;
    }

    &:hover {
      color: ${theme?.colors?.primary};
    }
  }
`;
