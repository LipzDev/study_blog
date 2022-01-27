import React from "react";
import Head from "next/head";
import { posts } from "../BlogTemplate/mock";
import ButtonReturn from "../../components/ButtonReturn";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Modal from "react-modal";
import SearchBar from "../../components/SearchBar";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import * as S from "./styles";

const AdminTemplate = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
            <Button onClick={openModal} themeColor="primary">
              Criar nova postagem
            </Button>
          </S.RecentsPosts>

          <SearchBar />

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

      {/* MODAL FORM */}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <S.Form>
          <input type="file" />
          <Input placeholder="Título" />
          <Input placeholder="Descrição" />
          <Textarea placeholder="Mensagem" />
          <Button themeColor="primary">Postar</Button>
        </S.Form>
      </Modal>
    </Layout>
  );
};

export default AdminTemplate;
