import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
`;

export const Pagination = styled.div<{ disableBtn: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;

  button {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 8px;
    border: none;
    transition: 0.2s;

    ${(props) =>
      props.disableBtn
        ? ``
        : `:hover {
      background-color: #cccc;
    }`}
  }
`;
