import React from "react";
import Layout from "../../components/Layout";
import { posts } from "../HomeTemplate/mock";
import * as S from "./styles";

type PostTemplateProps = {
  url?: number | string[];
};

const PostTemplate = ({ url }: PostTemplateProps) => {
  return (
    <Layout>
      <S.Wrapper>
        {posts.map(
          (post, index) =>
            post.id === Number(url) && (
              <div key={index}>
                <h1>{post.title}</h1>
                <h2>{post.description}</h2>
                <img src={post.image} />
                <p>{post.text}</p>
              </div>
            ),
        )}
      </S.Wrapper>
    </Layout>
  );
};

export default PostTemplate;
