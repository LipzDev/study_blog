import styled from "styled-components";

export const Wrapper = styled.section``;

export const HighlightTitle = styled.h1`
  color: #313131;
  margin: 1.5rem 0;
  font-weight: 500;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
`;

export const PostContent = styled.div`
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    object-position: right center;
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

  @media screen and (max-width: 1024px) {
    overflow-y: scroll;
  }
`;
