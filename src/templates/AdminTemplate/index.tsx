/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import Card from "../../components/molecules/Card";
import Layout from "../../components/molecules/Layout";
import Button from "../../components/atoms/Button";
import Modal from "react-modal";
import SearchBar from "../../components/atoms/SearchBar";
import Input from "../../components/atoms/Input";
import Textarea from "../../components/atoms/Textarea";
import { customStyles, customStylesConfirmationModal } from "./styles";
import { useRouter } from "next/router";
import { Timestamp } from "firebase/firestore";
import { PostTypes } from "../../types/types";
import { usePost } from "../../hooks/usePosts";
import { nanoid } from "nanoid";
import * as S from "./styles";

const AdminTemplate = () => {
  const { posts, addPost, removePost, setImage, image } = usePost();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [post, setPost] = useState<PostTypes>("" as PostTypes);
  const route = useRouter();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  // Informações a serem enviadas

  const formData = {
    id: nanoid(),
    slug: "",
    author: author,
    title: title,
    date: Timestamp.fromDate(new Date()),
    image:
      image?.name === undefined
        ? "/img/att.jpg"
        : `https://firebasestorage.googleapis.com/v0/b/blog-47a62.appspot.com/o/image%2F${image?.name}?alt=media`,
    imagePath: image?.name,
    text: text,
  };

  // Faz o post das informações

  async function handleClickToUpload(event: any) {
    event.preventDefault();
    addPost(formData);
    closeModal();
  }

  // Exclui a publicação

  function confirmDeletion(id: PostTypes) {
    setOpenConfirmationModal(true);
    setPost(id);
  }

  function exclude(id: PostTypes) {
    removePost(id);
    setOpenConfirmationModal(false);
  }

  // Edita a publicação

  function edit(post: PostTypes) {
    route.push(`/admin/editar-postagem/${post.id}`);
  }

  // Fecha o modal

  function closeModal() {
    setModalIsOpen(false);
  }

  function openModal() {
    setModalIsOpen(true);
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
          <ButtonReturn returnTo="/" />

          <S.CreateNewPost>
            <h1>Olá seja bem vindo(a).</h1>
            <Button onClick={openModal} themeColor="primary">
              Criar nova postagem
            </Button>
          </S.CreateNewPost>

          <SearchBar
            onChange={(e: any) => setValue(e.target.value)}
            value={value}
          />

          <S.PostFlex>
            {posts?.map((post: PostTypes, index: number) => (
              <Card
                id={post?.id}
                key={index}
                hasDate={true}
                date={post?.date.seconds}
                author={post.author}
                image={post?.image}
                title={post?.title}
                isAdmin={true}
                exclude={() => confirmDeletion(post.documentId as any)}
                edit={() => edit(post)}
              >
                {post.text}
              </Card>
            ))}
          </S.PostFlex>
          {/* <Pagination /> */}
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
          <Input placeholder="Título" setValueToForm={setTitle} />
          <Input placeholder="Author" setValueToForm={setAuthor} />
          <Textarea placeholder="Mensagem" setValueToForm={setText} />
          <Button
            themeColor="primary"
            onClick={(event: void) => handleClickToUpload(event)}
          >
            Postar
          </Button>
        </S.Form>
      </Modal>

      {/* MODAL DE CONFIRMAÇÃO */}

      <Modal
        isOpen={openConfirmationModal}
        onRequestClose={() => setOpenConfirmationModal(false)}
        style={customStylesConfirmationModal}
      >
        <S.ConfirmExclude>
          <h2>Deseja mesmo excluir esta publicação?</h2>

          <S.Options>
            <button onClick={() => setOpenConfirmationModal(false)}>
              CANCELAR
            </button>
            <button onClick={() => exclude(post)} className="confirm-button">
              SIM, EXCLUIR
            </button>
          </S.Options>
        </S.ConfirmExclude>
      </Modal>
    </Layout>
  );
};

export default AdminTemplate;
