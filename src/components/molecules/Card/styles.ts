import styled from "styled-components";

export const SmallCard = styled.div`
  margin-bottom: 5rem;

  width: 100%;
  min-width: 280px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    color: #313131;
    margin: 1.5rem 0;
    font-weight: 500;
    overflow: hidden;
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
    border: 1px solid #ccc;
    cursor: pointer;
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

  .skeleton {
    /* opacity: 0.8; */
    animation: skeleton-loading 1s linear infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 0%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row !important;

  span {
    font-size: 1.3rem;
    margin-top: 5px;
  }

  small {
    margin: 5px 10px 0 10px;
  }
`;

export const LargeCard = styled.div`
  margin-bottom: 5rem;

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

  .skeleton {
    /* opacity: 0.8; */
    animation: skeleton-loading 1s linear infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 0%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  img {
    width: 100%;
    max-height: 600px;
    min-height: 600px;
    object-fit: cover;
    object-position: right center;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    cursor: pointer;
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

export const Options = styled.div`
  button {
    margin-right: 20px;
  }
`;
