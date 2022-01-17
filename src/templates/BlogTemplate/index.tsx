import React from "react";
import ButtonReturn from "../../components/ButtonReturn";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import MediaMatch from "../../components/MediaMatch";
import { posts } from "./mock";
import * as S from "./styles";

const BlogTemplate = () => {
  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <ButtonReturn returnTo="/" />
          <S.GridLayout>
            <MediaMatch greaterThan="large">
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
            </MediaMatch>

            <MediaMatch greaterThan="large">
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
            </MediaMatch>

            {/* VERSÃO MOBILE */}
            <MediaMatch lessThan="large">
              <S.FeaturedPost>
                {posts.map((post, index) => (
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
                ))}
              </S.FeaturedPost>
            </MediaMatch>
          </S.GridLayout>
        </S.Container>
      </S.Wrapper>
    </Layout>
  );
};

export default BlogTemplate;
