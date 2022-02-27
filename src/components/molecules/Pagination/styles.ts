import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  span,
  button {
    cursor: pointer;
  }

  span {
    font-size: 1.6rem;
    color: #3e3e3e;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
  }

  span + span {
    margin-left: 20px;
  }
`;

export const Buttons = styled.div`
  ${({ theme }) => css`
    margin: 0 20px;

    .actived {
      background: ${theme.colors.primary};
      color: white;
    }

    button {
      width: 22px;
      height: 22px;
      border-radius: 3px;
      font-weight: 600;
      font-size: 1.4rem;
      border: none;
      background: transparent;
      color: #3e3e3e;

      :hover {
        background: ${theme.colors.primary};
        color: white;
      }
    }

    button + button {
      margin-left: 10px;
    }
  `}
`;
