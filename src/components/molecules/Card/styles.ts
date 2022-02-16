import styled from "styled-components";

export const SmallCard = styled.div`
  border-radius: 2px;
  position: relative;

  height: 410px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    min-width: 280px;
    max-width: 100%;
  }
`;

export const CardTop = styled.div`
  animation: placeholderShimmer 1s linear infinite forwards;
  background: #f6f7f8;

  width: 100%;
  min-height: 200px;

  img {
    width: 100%;
    max-height: 300px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
  }

  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`;

export const CardBottom = styled.div`
  /* padding: 0 15px 15px 15px; */

  max-height: 100%;

  h1 {
    color: #313131;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  h2 {
    color: #3e3e3e;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
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
`;

// DATE

export const PostInfo = styled.div`
  span {
    font-size: 1.3rem;
  }

  small {
    margin: 5px 10px 0 10px;
  }
`;

// CARD GRANDE

export const LargeCard = styled.div`
  margin-bottom: 5rem;
`;

export const ContainerTop = styled.div`
  animation: placeholderShimmer 1s linear infinite forwards;
  background: #f6f7f8;

  width: 100%;
  min-height: 580px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 580px;
    object-fit: cover;
    cursor: pointer;
  }

  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }

  @media screen and (max-width: 1024px) {
    min-height: 280px;

    img {
      height: 280px;
    }
  }
`;

export const ContainerBottom = styled.div`
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
`;

export const Options = styled.div`
  button {
    margin-right: 20px;
  }
`;

export const Button = styled.div`
  position: absolute;
  bottom: 10px;

  .left-button {
    margin-right: 20px;
  }
`;
