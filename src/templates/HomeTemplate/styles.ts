import styled from "styled-components";

export const Wrapper = styled.section``;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 800px auto;
  grid-column-gap: 100px;
  margin-top: 3rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100% auto;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
`;

export const FeaturedPost = styled.div`
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    text-align: justify;
  }
`;

export const RecentPosts = styled.div``;
