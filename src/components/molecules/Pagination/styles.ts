import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;

  span,
  button {
    cursor: pointer;
  }

  span {
    font-size: 1.6rem;
    color: #3e3e3e;
  }
`;
