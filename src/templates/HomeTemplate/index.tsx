import React from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { posts } from "../BlogTemplate/mock";
import * as S from "./styles";

const HomeTemplate = () => {
  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <h1>Destaques da semana</h1>
          <Card
            id={posts[0].id}
            large={true}
            hasDate={true}
            author={posts[0].author}
            date={posts[0].date}
            image={posts[0].image}
            title={posts[0].title}
          >
            {posts[0].text}
          </Card>

          <S.PostFlex>
            {posts.map(
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
