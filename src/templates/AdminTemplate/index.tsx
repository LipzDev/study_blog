/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
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
import { storage, db } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import * as S from "./styles";

const AdminTemplate = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const route = useRouter();
  const [image, setImage]: any = useState("");
  const imageRef = ref(storage, `image/${image.name}`);

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

  const docData = {
    author: "Filipe Teste",
    title: "Lorem ipsum",
    description: "TEstando a description",
    date: Timestamp.fromDate(new Date("December 10, 1815")),
    image: image.name,
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ut, error labore autem vitae dolore, dolorem molestiae perspiciatis laboriosam iusto quidem repudiandae mollitia ipsa amet hic laborum est, ullam earum.",
  };

  async function handleClickToUpload(event: any) {
    event.preventDefault();

    uploadBytes(imageRef, image)
      .then(() => {
        alert("Imagem enviada");
      })
      .catch(() => {
        alert("Erro ao enviar imagem");
      });

    await addDoc(collection(db, "posts"), docData);
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
          <input
            type="file"
            onChange={(e: any) => setImage(e.target.files[0])}
          />
          <Input placeholder="Título" />
          <Input placeholder="Descrição" />
          <Textarea placeholder="Mensagem" />
          <Button
            themeColor="primary"
            onClick={(event: void) => handleClickToUpload(event)}
          >
            Postar
          </Button>
        </S.Form>
      </Modal>
    </Layout>
  );
};

export default AdminTemplate;
