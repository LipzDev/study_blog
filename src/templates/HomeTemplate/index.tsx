import React from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { posts } from "../BlogTemplate/mock";
import * as S from "./styles";

const HomeTemplate = () => {
  const lastPost = posts.slice(-1)[0];

  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <S.HighlightTitle>Destaques da semana</S.HighlightTitle>
          <Card
            id={lastPost.id}
            large={true}
            hasDate={true}
            author={lastPost.author}
            date={lastPost.date}
            image={lastPost.image}
            title={lastPost.title}
          >
            {lastPost.text}
          </Card>

          <S.PostFlex>
            {posts
              .slice(-4)
              .reverse()
              .map(
                (post, index) =>
                  index > 0 &&
                  index < 4 && (
                    <Card
                      id={post.id}
                      key={index}
                      image={post.image}
                      title={post.title}
                      description={post.description}
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
