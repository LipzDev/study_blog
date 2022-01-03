import styled from "styled-components";

export const SmallCard = styled.div`
  margin-bottom: 5rem;
  cursor: pointer;
  max-width: 300px;

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  p {
    margin-top: 15px;
    font-size: 1.3rem;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const LargeCard = styled.div`
  margin-bottom: 5rem;
  cursor: pointer;

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  p {
    margin-top: 15px;
    font-size: 1.3rem;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  @media screen and (max-width: 1024px) {
    img {
      max-height: 200px;
      margin-bottom: 2rem;
    }
  }
`;
