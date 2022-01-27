import styled, { css } from "styled-components";
import { SearchBar } from "./index";

export const Wrapper = styled.form<SearchBar>`
  ${({ theme, isFocused }) => css`
    margin-bottom: 3rem;
    max-width: 414px;
    border: 2px solid ${isFocused ? theme.colors.primary : "#ccc"};
    border-radius: 20px;
    position: relative;

    label {
      position: absolute;
      top: ${isFocused ? "-12px" : "9px"};
      left: ${isFocused ? "40px" : "20px"};
      padding: 0 8px;
      background: linear-gradient(transparent 41%, #fff 41%, #fff 59%);
      transition: 0.2s;
      color: #3e3e3e;
      z-index: ${isFocused ? "1" : "-1"};
    }

    input {
      width: 350px;
      height: 38px;
      border: 0;
      background: transparent;
      border-radius: 20px;
      outline: none;
      padding-left: 20px;
    }

    button {
      border: 0;
      width: 70px;
      height: 100%;
      border-radius: 20px;
      position: absolute;
      right: 0;
      cursor: pointer;
      box-shadow: -0.3rem 0 1rem rgba(29, 29, 29, 0.2);

      span {
        svg {
          width: 15px;
          position: relative;
          top: 3px;

          path {
            fill: ${isFocused ? theme.colors.primary : "#3e3e3e"};
          }
        }
      }
    }
  `}
`;
