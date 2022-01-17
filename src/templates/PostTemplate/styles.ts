import styled from "styled-components";

export const Wrapper = styled.section``;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 95%;
`;

export const PostContent = styled.div`
  h1 {
    color: #313131;
    margin: 1.5rem 0;
    font-weight: 500;
  }

  h2 {
    color: #3e3e3e;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  p {
    color: #3e3e3e;
  }

  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    object-position: right center;
    margin-bottom: 10px;
  }

  p {
    margin-top: 3rem;
    text-align: justify;
    margin-bottom: 5rem;
  }

  span {
    color: #3e3e3e;
  }

  @media screen and (max-width: 1024px) {
    h2 {
      margin: 0 0 1rem 0;
    }

    img {
      height: auto;
      margin-bottom: 1rem;
    }
  }
`;
