import styled, { css } from "styled-components";
import { animated } from "react-spring";

interface ContainerProps {
  type?: "success" | "error" | "info";
  hasDescription: boolean;
}

export const ContainerRight = styled.div`
  padding: 1.6rem 1.9rem;

  div {
    max-width: 100%;

    p {
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 400;
      color: #fff;

      margin: 0;
      padding: 0;
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;

    cursor: pointer;
  }
`;

export const ContainerIcon = styled.div`
  ${({ theme }) => css`
    min-width: 5.6rem;
    width: 5.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    > div {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;
      top: 3px;
    }

    svg path {
      fill: ${theme.colors.white[100]};
    }
  `}
`;

const toastTypeVariations = {
  info: css`
    background: #0079b8;
    ${ContainerIcon} {
      background: #008ad2;
    }
  `,
  success: css`
    background: #309c3f;
    ${ContainerIcon} {
      background: #38b449;
    }
  `,
  error: css`
    background: #db3c31;
    ${ContainerIcon} {
      background: #f44336;
    }
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 35.8rem;

  border-radius: 4px;

  position: relative;
  transform: translateX(-50%);

  display: flex;

  z-index: 9999;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || "info"]}
`;
