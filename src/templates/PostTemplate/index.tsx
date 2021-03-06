/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Layout from "../../components/molecules/Layout";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import { getPosts } from "../../services/firebase/getPosts";
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
          <ButtonReturn returnTo="/" />
          {posts?.map(
            (post: any, index: number) =>
              post.id === url && (
                <S.PostContent key={index}>
                  <S.ContainerTop>
                    <img src={post?.image} />
                  </S.ContainerTop>
                  <S.Date>
                    <span>{post?.author ? post?.author : "Desconhecido"}</span>{" "}
                    |{" "}
                    <span className="dateNumber">
                      <img
                        src="/icons/clock.svg"
                        alt="icon"
                        title={timestamp(
                          "DD/MM/YYYY",
                          new Date((post?.date.seconds as any) * 1000),
                        )}
                      />
                      {timestamp(
                        "DD/MM/YYYY",
                        new Date((post?.date.seconds as any) * 1000),
                      )}
                    </span>
                  </S.Date>
                  <h1>{post?.title}</h1>
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
