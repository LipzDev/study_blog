import React from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { posts } from "./mock";
import * as S from "./styles";

const HomeTemplate = () => {
  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <S.GridLayout>
            <S.FeaturedPost>
              {posts.map(
                (post, index) =>
                  index < 3 && (
                    <Card
                      id={post.id}
                      key={index}
                      large={true}
                      image={post.image}
                      title={post.title}
                      description={post.description}
                    >
                      {post.text}
                    </Card>
                  ),
              )}
            </S.FeaturedPost>

            <S.RecentPosts>
              {posts.map(
                (post, index) =>
                  index > 3 &&
                  index < 7 && (
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
            </S.RecentPosts>
          </S.GridLayout>
        </S.Container>
      </S.Wrapper>
    </Layout>
  );
};

export default HomeTemplate;
