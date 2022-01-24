import styled from "styled-components";

export const Wrapper = styled.section`
  h1 {
    margin-top: 20px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
`;

export const RecentsPosts = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
