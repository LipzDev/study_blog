import styled from "styled-components";

export const Wrapper = styled.section`
  .return {
    margin-top: 20px;
    a {
      text-decoration: none;
      color: #0055ff;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 95%;
`;

export const PostContent = styled.div`
  h1 {
    margin: 3rem 0 1rem 0;
    font-size: 5rem;
    font-weight: 400;
  }

  h2 {
    margin: 3rem 0 2rem 0;
    font-size: 3rem;
    font-weight: 300;
  }

  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    object-position: right center;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  p {
    margin-top: 3rem;
    text-align: justify;
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 2rem;
    }

    img {
      height: auto;
    }
  }
`;
