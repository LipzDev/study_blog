import React from "react";
import Head from "next/head";
import { posts } from "../BlogTemplate/mock";
import ButtonReturn from "../../components/ButtonReturn";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import * as S from "./styles";

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
            <Button>Criar nova postagem</Button>
          </S.RecentsPosts>
          <S.Form>
            <input type="text"></input>
            <Button>Pesquisar</Button>
          </S.Form>
          <S.PostFlex>
            {posts
              .slice()
              .reverse()
              .map((post, index) => (
                <Card
                  id={post.id}
                  key={index}
                  image={post.image}
                  title={post.title}
                  description={post.description}
                  isAdmin={true}
                >
                  {post.text}
                </Card>
              ))}
          </S.PostFlex>
        </S.Container>
      </S.Wrapper>
    </Layout>
  );
};

export default AdminTemplate;
