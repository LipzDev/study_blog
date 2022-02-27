/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Layout from "../../components/molecules/Layout";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import { getPosts } from "../../services/firebase/database/getPosts";
import * as S from "./styles";
import timestamp from "time-stamp";
import { PostTypes } from "../../types/types";

type PostTemplateProps = {
  url?: string | string[];
};

const PostTemplate = ({ url }: PostTemplateProps) => {
  const [posts, setPosts] = useState<PostTypes | any>();

  // Puxa o conteúdo.

  useEffect(() => {
    getPosts().then((response: any) => setPosts(response));
  }, []);

  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <ButtonReturn returnTo="/blog" />
          {posts?.map(
            (post: any, index: number) =>
              post.id === url && (
                <S.PostContent key={index}>
                  <h1>{post?.title}</h1>
                  <S.ContainerTop>
                    <img src={post?.image} loading="lazy" />
                  </S.ContainerTop>
                  <S.Date>
                    <span>{post?.author ? post?.author : "Desconhecido"}</span>{" "}
                    |{" "}
                    <span className="dateNumber">
                      <img src="/icons/clock.svg" alt="icon" />
                      {timestamp(
                        "DD/MM/YYYY",
                        new Date((post?.date.seconds as any) * 1000),
                      )}
                    </span>
                  </S.Date>
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
