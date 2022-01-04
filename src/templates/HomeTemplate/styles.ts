import styled from "styled-components";

export const Wrapper = styled.section`
  h1 {
    margin: 3rem 0 1rem 0;
    font-size: 5rem;
    font-weight: 400;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
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

export const PostFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;
