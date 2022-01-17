import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      align-items: center;
    }

    li {
      list-style: none;
      cursor: pointer;
    }

    li + li {
      margin-left: 20px;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primaryLight};
      transition: 0.3s;

      &:hover {
        color: white;
      }
    }

    @media screen and (max-width: 768px) {
      ul {
        position: absolute;
        left: -100rem;
        top: 0;

        background-color: black;
        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        transition: 0.5s;
      }

      li + li {
        margin-left: 0;
        margin-top: 30px;
      }

      a {
        color: ${theme.colors.primaryLight};
      }

      &.active {
        ul {
          left: 0;
        }
      }
    }
  `}
`;
