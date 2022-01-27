import styled, { css } from "styled-components";
import { TextareaProps } from "./index";

export const Wrapper = styled.form<TextareaProps>`
  ${({ theme, isFocused }) => css`
    margin-bottom: 2rem;
    max-width: 100%;
    border: 2px solid ${isFocused ? theme.colors.primary : "#ccc"};
    border-radius: 10px;
    position: relative;

    label {
      position: absolute;
      top: ${isFocused ? "-12px" : "13px"};
      left: ${isFocused ? "40px" : "20px"};
      padding: 0 8px;
      background: linear-gradient(transparent 41%, #fff 41%, #fff 59%);
      transition: 0.2s;
      color: #3e3e3e;
      z-index: ${isFocused ? "1" : "-1"};
    }

    textarea {
      width: 100%;
      height: 100px;
      resize: none;
      border: 0;
      padding: 23px 15px;
      background: transparent;
      outline: none;
      padding-left: 20px;
      overflow: hidden;
    }
  `}
`;
