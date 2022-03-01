import styled from "styled-components";

export const Wrapper = styled.section``;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 95%;
  min-height: 100vh;
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
    object-position: center;
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
    }
  }
`;

export const ContainerTop = styled.div`
  animation: placeholderShimmer 1s linear infinite forwards;
  background: #f6f7f8;

  margin-top: 1.5rem;

  width: 100%;
  min-height: 580px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 580px;
    /* object-fit: cover; */
    border: 1px solid #ccc;
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
    min-height: 480px;

    img {
      height: 480px;
    }
  }

  @media screen and (max-width: 580px) {
    min-height: 280px;

    img {
      height: 280px;
    }
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 5px;
    color: #3e3e3e;
  }

  img {
    margin: 0 5px;
    position: relative;
    top: -1px;
    max-width: 17px;
    max-height: 17px;
  }

  .dateNumber {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
  }

  margin-top: 5px;
`;
