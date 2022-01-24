import React from "react";
import Head from "next/head";
import { posts } from "../BlogTemplate/mock";
import ButtonReturn from "../../components/ButtonReturn";

import * as S from "./styles";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

const AdminTemplate = () => {
  return (
    <Layout isLoggedIn={true}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!document.cookie || !document.cookie.includes('auth-token')){
        window.location.href="/login"
      }`,
          }}
        />
      </Head>
      <S.Wrapper>
        <S.Container>
          <ButtonReturn returnTo="/blog" />
          <h1>Olá Admin</h1>

          <S.RecentsPosts>
            <h2>Postagens recentes</h2>
            <button>Criar nova postagem</button>
          </S.RecentsPosts>
          <S.PostFlex>
            {posts.map(
              (post, index) =>
                index < 3 && (
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

export default AdminTemplate;
