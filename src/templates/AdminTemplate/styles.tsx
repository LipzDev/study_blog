import styled from "styled-components";

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

export const RecentsPosts = styled.div`
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
