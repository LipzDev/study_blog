/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Layout from "../../components/molecules/Layout";
import * as S from "./styles";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import { DataTypes } from "../BlogTemplate";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

type PostTemplateProps = {
  url?: string | string[];
};

const PostTemplate = ({ url }: PostTemplateProps) => {
  // EXIBIR POSTAGENS

  const [data, setData] = useState<DataTypes>();
  const posts: any = [];

  async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      posts.push({ ...doc.data() });
    });
    setData(posts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <ButtonReturn returnTo="/blog" />
          {data?.map(
            (post: any, index: number) =>
              post.id === url && (
                <S.PostContent key={index}>
                  <h1>{post?.title}</h1>
                  <h2>{post?.description}</h2>
                  <img
                    src={
                      "https://i0.wp.com/multarte.com.br/wp-content/uploads/2018/12/fundo-preto-background.png?resize=696%2C392&ssl=1"
                    }
                  />
                  <span>{post?.author}</span> -{" "}
                  <span>{post?.date.seconds}</span>
                  <p>{post?.text}</p>
                </S.PostContent>
              ),
          )}

          {/* {data?.map(
            (post: any, index: number) =>
              post.id === Number(url) && (
                <S.PostContent key={index}>
                  <h1>{post?.title}</h1>
                  <h2>{post?.description}</h2>
                  <img src={post?.image} />
                  <span>{post?.author}</span> -{" "}
                  <span>{post?.date.seconds}</span>
                  <p>{post?.text}</p>
                </S.PostContent>
              ),
          )} */}
        </S.Container>
      </S.Wrapper>
    </Layout>
  );
};

export default PostTemplate;
