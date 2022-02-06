import styled from "styled-components";

export const Wrapper = styled.section``;

export const GridLayout = styled.div`
  display: flex;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
`;

export const FeaturedPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 3rem;
  margin-top: 1.5rem;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  p {
    text-align: justify;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
