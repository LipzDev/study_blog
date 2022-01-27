import styled from "styled-components";

export const Wrapper = styled.section`
  h1 {
    margin-top: 20px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
`;

export const RecentsPosts = styled.div`
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 3rem;

  @media screen and (max-width: 1024px) {
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
    border-radius: 10px;
  }
`;
