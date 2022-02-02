import React from "react";
import Head from "next/head";
import { posts } from "../BlogTemplate/mock";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import Card from "../../components/molecules/Card";
import Layout from "../../components/molecules/Layout";
import Button from "../../components/atoms/Button";
import Modal from "react-modal";
import SearchBar from "../../components/atoms/SearchBar";
import Input from "../../components/atoms/Input";
import Textarea from "../../components/atoms/Textarea";
import { customStyles } from "./styles";
import { useRouter } from "next/router";
import * as S from "./styles";

const AdminTemplate = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const route = useRouter();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function exclude() {
    alert("Modal de excluir");
  }

  function edit(post: any) {
    route.push(`/admin/editar-postagem/${post.id}`);
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
                  exclude={() => exclude()}
                  edit={() => edit(post)}
                >
                  {post.text}
                </Card>
              ))}
          </S.PostFlex>
        </S.Container>
      </S.Wrapper>

      {/* MODAL FORM */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
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
