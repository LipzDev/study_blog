/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import Card from "../../components/molecules/Card";
import Layout from "../../components/molecules/Layout";
import MediaMatch from "../../components/molecules/MediaMatch";
import Pagination from "../../components/molecules/Pagination";
import data from "../../services/firebase/database/getPosts";
import * as S from "./styles";

export type DataTypes = {
  author: string;
  id: string;
  title: string;
  slice: any;
  text: string;
  map: any;
  image: string;
  push: any;
  filter?: any;
};

const BlogTemplate = () => {
  const getAllPosts = data();

  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <ButtonReturn returnTo="/" />
          {data === undefined && <p>Não há postagens no momento!</p>}

          <S.FeaturedPost>
            {getAllPosts?.map((post: any, index: number) => (
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
