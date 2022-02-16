/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Layout from "../../components/molecules/Layout";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import data from "../../services/firebase/database/getPosts";
import * as S from "./styles";

type PostTemplateProps = {
  url?: string | string[];
};

const PostTemplate = ({ url }: PostTemplateProps) => {
  const getAllPosts = data();

  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <ButtonReturn returnTo="/blog" />
          {getAllPosts?.map(
            (post: any, index: number) =>
              post.id === url && (
                <S.PostContent key={index}>
                  <h1>{post?.title}</h1>
                  <S.ContainerTop>
                    <img src={post?.image} loading="lazy" />
                  </S.ContainerTop>
                  <span>{post?.author}</span> -{" "}
                  <span>{post?.date.seconds}</span>
                  <p>{post?.text}</p>
                </S.PostContent>
              ),
          )}

          {getAllPosts?.map(
            (post: any, index: number) =>
              post.id === Number(url) && (
                <S.PostContent key={index}>
                  <h1>{post?.title}</h1>
                  <img src={post?.image} loading="lazy"></img>
                  <span>{post?.author}</span> -{" "}
                  <span>{post?.date.seconds}</span>
                  <p>{post?.text}</p>
                </S.PostContent>
              ),
          )}
        </S.Container>
      </S.Wrapper>
    </Layout>
  );
};

export default PostTemplate;
