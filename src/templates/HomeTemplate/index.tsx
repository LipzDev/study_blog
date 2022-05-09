/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Card from "../../components/molecules/Card";
import Layout from "../../components/molecules/Layout";
import { getRecentPosts } from "../../services/firebase/recentsPosts";
import { PostTypes } from "../../types/types";
import * as S from "./styles";

const HomeTemplate = () => {
  const [recentPosts, setRecentPosts] = useState<PostTypes | any>();

  // Puxa o conteúdo.

  useEffect(() => {
    getRecentPosts().then((response: any) => setRecentPosts(response));
  }, []);

  const postHighlight: any = recentPosts !== undefined && recentPosts;

  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <S.HighlightTitle>Destaques da semana</S.HighlightTitle>
          {postHighlight[0] !== undefined ? (
            <Card
              id={postHighlight[0]?.id}
              large={true}
              hasDate={true}
              author={postHighlight[0]?.author}
              date={postHighlight[0]?.date.seconds}
              image={postHighlight[0]?.image}
              title={postHighlight[0]?.title}
            >
              {postHighlight[0]?.text}
            </Card>
          ) : (
            <p>Não há postagens no momento!</p>
          )}

          <S.PostFlex>
            {recentPosts?.map(
              (post: any, index: number) =>
                index > 0 && (
                  <Card
                    id={post?.id}
                    key={index}
                    hasDate={true}
                    date={post?.date?.seconds}
                    author={post.author}
                    image={post?.image}
                    title={post?.title}
                  >
                    {post.text}
                  </Card>
                ),
            )}
          </S.PostFlex>
        </S.Container>
      </S.Wrapper>
    </Layout>
  );
};

export default HomeTemplate;
