import React from "react";
import Layout from "../../components/molecules/Layout";
import * as S from "./styles";
import ButtonReturn from "../../components/atoms/ButtonReturn";

type PostTemplateProps = {
  url?: string | string[];
};

const PostTemplate = ({ url }: PostTemplateProps) => {
  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <ButtonReturn returnTo="/blog" />
          {/* {posts.map(
            (post, index) =>
              post.id === Number(url) && (
                <S.PostContent key={index}>
                  <h1>{post.title}</h1>
                  <h2>{post.description}</h2>
                  <img src={post.image} />
                  <span>{post.author}</span> - <span>{post.date}</span>
                  <p>{post.text}</p>
                </S.PostContent>
              ),
          )} */}
        </S.Container>
      </S.Wrapper>
    </Layout>
  );
};

export default PostTemplate;
