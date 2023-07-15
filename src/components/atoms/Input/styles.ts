import styled, { css } from "styled-components";
import { InputProps } from "./index";

export const Wrapper = styled.form<InputProps>`
  ${({ theme, isFocused }) => css`
    margin-bottom: 1.5rem;
    max-width: 100%;
    border: 2px solid ${isFocused ? theme.colors.primary : "#ccc"};
    position: relative;
    border-radius: 5px;

    label {
      position: absolute;
      top: ${isFocused ? "-12px" : "10px"};
      left: ${isFocused ? "20px" : "12px"};
      padding: 0 8px;
      background: linear-gradient(transparent 41%, #fff 41%, #fff 59%);
      transition: 0.2s;
      color: #3e3e3e;
      z-index: ${isFocused ? "1" : "-1"};

      span {
        color: red;
      }
    }

    input {
      width: 100%;
      height: 0;
      border: 0;
      padding: 20px 20px;
      border-radius: 5px;
      outline: none;
      background-color: transparent;
    }
  `}
`;
