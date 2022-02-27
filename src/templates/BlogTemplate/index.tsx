/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import Card from "../../components/molecules/Card";
import Layout from "../../components/molecules/Layout";
import Pagination from "../../components/molecules/Pagination";
import { getPosts } from "../../services/firebase/database/getPosts";
import { PostTypes } from "../../types/types";
import * as S from "./styles";

const BlogTemplate = () => {
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

          <S.FeaturedPost>
            {posts?.map((post: any, index: number) => (
              <Card
                id={post?.id}
                key={index}
                hasDate={true}
                date={post?.date.seconds}
                author={post.author}
                image={post?.image}
                title={post?.title}
              >
                {post?.text}
              </Card>
            ))}
          </S.FeaturedPost>
        </S.Container>
        <Pagination />
      </S.Wrapper>
    </Layout>
  );
};

export default BlogTemplate;
