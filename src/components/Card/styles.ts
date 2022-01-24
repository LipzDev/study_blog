import styled from "styled-components";

export const SmallCard = styled.div`
  margin-bottom: 5rem;
  cursor: pointer;
  width: 100%;
  max-width: 400px;

  h1 {
    color: #313131;
    margin: 1.5rem 0;
    font-weight: 500;
  }

  h2 {
    color: #3e3e3e;
    font-weight: 400;
  }

  img {
    width: 100%;
    max-height: 300px;
    height: 200px;
    object-fit: cover;
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
    color: #3e3e3e;
  }

  @media screen and (max-width: 1024px) {
    min-width: 80%;
  }
`;

export const LargeCard = styled.div`
  margin-bottom: 5rem;
  cursor: pointer;

  h1 {
    color: #313131;
    margin: 1.5rem 0;
    font-weight: 500;
  }

  h2 {
    color: #3e3e3e;
    font-weight: 400;
  }

  p {
    color: #3e3e3e;
  }

  img {
    width: 100%;
    max-height: 600px;
    object-fit: cover;
    margin-bottom: 15px;
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
    }
  }
`;
