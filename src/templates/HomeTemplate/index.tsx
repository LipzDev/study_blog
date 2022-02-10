/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Card from "../../components/molecules/Card";
import Layout from "../../components/molecules/Layout";
import getRecentPosts from "../../services/firebase/database/recentsPosts";
import * as S from "./styles";

const HomeTemplate = () => {
  const recentPost = getRecentPosts();
  const highlight: any = recentPost !== undefined && recentPost;

  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <S.HighlightTitle>Destaques da semana</S.HighlightTitle>
          {
            <Card
              id={highlight[0]?.id}
              large={true}
              hasDate={true}
              author={highlight[0]?.author}
              date={highlight[0]?.date.seconds}
              image={highlight[0]?.image}
              title={highlight[0]?.title}
            >
              {highlight[0]?.text}
            </Card>
          }

          <S.PostFlex>
            {recentPost?.map(
              (post: any, index: number) =>
                index > 0 && (
                  <Card
                    id={post?.id}
                    key={index}
                    hasDate={true}
                    date={post?.date.seconds}
                    author={post.author}
                    image={post?.image}
                    title={post?.title}
                    description={post?.description}
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
