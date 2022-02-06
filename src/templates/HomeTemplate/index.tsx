/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Card from "../../components/molecules/Card";
import Layout from "../../components/molecules/Layout";
import data from "../../services/firebase/database/data";
import * as S from "./styles";

const HomeTemplate = () => {
  const lastPost = data()?.slice(-1)[0];

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

          <S.PostFlex>
            {data()
              ?.slice(-5)
              .reverse()
              .map(
                (post: any, index: number) =>
                  index > 0 &&
                  index < 5 && (
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
