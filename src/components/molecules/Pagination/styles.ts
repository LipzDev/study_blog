import styled, { css } from "styled-components";

export const Pagination = styled.div`
  display: flex;
  align-items: center;

  span,
  button {
    cursor: pointer;
  }

  span {
    font-size: 1.6rem;
  }

  span + span {
    margin-left: 20px;
  }
`;

export const Buttons = styled.div`
  ${({ theme }) => css`
    margin: 0 20px;

    .actived {
      background: blue;
      color: white;
    }

    button {
      padding: 2px 7px;
      border: none;
      border-radius: 5px;
      font-weight: 600;
      font-size: 1.4rem;

      :hover {
        background: blue;
        color: white;
      }
    }

    button + button {
      margin-left: 10px;
    }
  `}
`;
