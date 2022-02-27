import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  h1 {
    margin-top: 10px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  width: 95%;
`;

export const CreateNewPost = styled.section`
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;

    button {
      margin-top: 20px;
    }
  }
`;

export const PostFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 3rem;
  margin: 1.5rem 0;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input[type="file"] {
    margin-bottom: 3rem;
  }

  button {
    border-radius: 5px;
  }
`;

export const ConfirmExclude = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 580px) {
    h2 {
      font-size: 1.4rem;
    }
  }
`;

export const Options = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 20px;

    button {
      border: none;
      cursor: pointer;
      padding: 10px 15px;
      width: 150px;
      border-radius: 5px;
    }

    button + button {
      margin-left: 20px;
    }

    .confirm-button {
      background-color: ${theme.colors.dangerLight};
      color: ${theme.colors.white};
    }

    @media screen and (max-width: 580px) {
      button {
        width: 140px;
        font-size: 1.3rem;
      }
    }
  `}
`;

// CUSTOM STYLES TO MODAL

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "390px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const customStylesConfirmationModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "190px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};
