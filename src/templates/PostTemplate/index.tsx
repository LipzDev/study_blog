import React from "react";
import Layout from "../../components/Layout";
import { posts } from "../HomeTemplate/mock";
import Link from "next/link";
import * as S from "./styles";

type PostTemplateProps = {
  url?: number | string[];
};

const PostTemplate = ({ url }: PostTemplateProps) => {
  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <div className="return">
            <Link href="/">← Voltar</Link>
          </div>
          {posts.map(
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
          )}
        </S.Container>
      </S.Wrapper>
    </Layout>
  );
};

export default PostTemplate;
