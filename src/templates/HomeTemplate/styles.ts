import styled from "styled-components";

export const Wrapper = styled.section`
  height: auto;
`

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 750px auto;
  grid-column-gap: 120px;
  margin-top: 3rem;
  .lastPost{
    img{
      width:100%;
      height: 400px;
      object-fit: cover;
    }
    p{
      text-align: justify;
    }
  }
  .postsRecents{
    .card{
      margin-bottom: 5rem;
    }
    img{
      width:100%;
      height:100%;
      object-fit: cover;
    }
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2; 
      -webkit-box-orient: vertical;
    }
  }
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
`