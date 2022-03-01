import styled from "styled-components";

export const Wrapper = styled.section``;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  width: 95%;
`;

export const FeaturedPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 3rem;
  margin: 1.5rem 0;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;
