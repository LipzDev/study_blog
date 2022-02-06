/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import Card from "../../components/molecules/Card";
import Layout from "../../components/molecules/Layout";
import MediaMatch from "../../components/molecules/MediaMatch";
import data from "../../services/firebase/database/data";
import * as S from "./styles";

export type DataTypes = {
  author: string;
  id: string;
  title: string;
  description: string;
  slice: any;
  text: string;
  map: any;
  image: string;
  push: any;
};

const BlogTemplate = () => {
  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <ButtonReturn returnTo="/" />
          <S.GridLayout>
            <MediaMatch greaterThan="large">
              {data === undefined && <p>Não há postagens no momento!</p>}

              <S.FeaturedPost>
                {data()?.map((post: any, index: number) => (
                  <Card
                    id={post?.id}
                    key={index}
                    image={
                      "https://i0.wp.com/multarte.com.br/wp-content/uploads/2018/12/fundo-preto-background.png?resize=696%2C392&ssl=1"
                    }
                    title={post?.title}
                    description={post?.description}
                  >
                    {post?.text}
                  </Card>
                ))}
              </S.FeaturedPost>
            </MediaMatch>

            {/* VERSÃO MOBILE */}
            <MediaMatch lessThan="large">
              <S.FeaturedPost>
                {data()?.map((post: any, index: number) => (
                  <Card
                    id={post?.id}
                    key={index}
                    image={
                      "https://i0.wp.com/multarte.com.br/wp-content/uploads/2018/12/fundo-preto-background.png?resize=696%2C392&ssl=1"
                    }
                    title={post?.title}
                    description={post?.description}
                  >
                    {post?.text}
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
