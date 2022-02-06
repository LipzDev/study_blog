/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Card from "../../components/molecules/Card";
import Layout from "../../components/molecules/Layout";
import { db } from "../../config/firebase";
import { DataTypes } from "../BlogTemplate";
import * as S from "./styles";

const HomeTemplate = () => {
  const [data, setData] = useState<DataTypes>();
  const posts: any = [];
  const lastPost = data?.slice(-1)[0];

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
          <S.HighlightTitle>Destaques da semana</S.HighlightTitle>
          {
            <Card
              id={lastPost?.id}
              large={true}
              hasDate={true}
              author={lastPost?.author}
              date={lastPost?.date.seconds}
              image={
                "https://i0.wp.com/multarte.com.br/wp-content/uploads/2018/12/fundo-preto-background.png?resize=696%2C392&ssl=1"
              }
              title={lastPost?.title}
            >
              {lastPost?.text}
            </Card>
          }

          {data === undefined && <p>Não há postagens no momento!</p>}

          <S.PostFlex>
            {data
              ?.slice(-4)
              .reverse()
              .map(
                (post: any, index: number) =>
                  index > 0 &&
                  index < 4 && (
                    <Card
                      id={post?.id}
                      key={index}
                      image={
                        "https://i0.wp.com/multarte.com.br/wp-content/uploads/2018/12/fundo-preto-background.png?resize=696%2C392&ssl=1"
                      }
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
