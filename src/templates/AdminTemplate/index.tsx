/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Head from "next/head";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import Card from "../../components/molecules/Card";
import Layout from "../../components/molecules/Layout";
import Button from "../../components/atoms/Button";
import Modal from "react-modal";
import SearchBar from "../../components/atoms/SearchBar";
import Input from "../../components/atoms/Input";
import Textarea from "../../components/atoms/Textarea";
import data from "../../services/firebase/database/getPosts";
import { customStyles, customStylesConfirmationModal } from "./styles";
import { useRouter } from "next/router";
import { storage, db } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import {
  collection,
  addDoc,
  Timestamp,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useToast } from "../../hooks/toast";
import Pagination from "../../components/molecules/Pagination";
import * as S from "./styles";

const AdminTemplate = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [postInfo, setPostInfo] = useState("");
  const route = useRouter();
  const getAllPosts = data();
  const { addToast } = useToast();

  // FORM CONTENT

  const [title, setTitle] = useState("");
  const [image, setImage]: any = useState("");
  const [author, setAuthor] = useState("");
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const imageRef = ref(storage, `image/${image?.name}`);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function confirmExclude(post: any) {
    setOpenConfirmationModal(true);
    setPostInfo(post);
  }

  async function exclude(post: any) {
    try {
      await deleteDoc(doc(db, "posts", post.id));
      addToast({
        title: "Publicação excluida com sucesso!",
        type: "success",
        duration: 5000,
      });
    } catch (e) {
      addToast({
        title: "Erro ao excluir publicação",
        type: "error",
        duration: 5000,
      });
    }
  }

  function edit(post: any) {
    route.push(`/admin/editar-postagem/${post.id}`);
  }

  const docData = {
    id: "",
    author: author,
    title: title,
    date: Timestamp.fromDate(new Date()),
    image:
      image?.name === undefined
        ? "/img/att.jpg"
        : `https://firebasestorage.googleapis.com/v0/b/blog-47a62.appspot.com/o/image%2F${image?.name}?alt=media`,
    text: text,
  };

  async function handleClickToUpload(event: any) {
    event.preventDefault();

    try {
      await uploadBytes(imageRef, image);
      const docRef = await addDoc(collection(db, "posts"), docData);
      const postIdRef: any = doc(db, "posts", docRef.id);
      setDoc(postIdRef, { id: docRef.id }, { merge: true });

      addToast({
        title: "Postagem enviada com sucesso!",
        type: "success",
        duration: 5000,
      });
      closeModal();
    } catch (e) {
      addToast({
        title: "Erro ao criar postagem",
        type: "error",
        duration: 5000,
      });
    }
  }

  const filterPosts = getAllPosts?.filter((data: any) =>
    data?.title?.toLocaleLowerCase().startsWith(value),
  );

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

          <S.RecentsPosts>
            <h1>Olá seja bem vindo(a).</h1>
            <Button onClick={openModal} themeColor="primary">
              Criar nova postagem
            </Button>
          </S.RecentsPosts>

          <SearchBar
            onChange={(e: any) => setValue(e.target.value)}
            value={value}
          />

          <S.PostFlex>
            {filterPosts?.map((post: any, index: number) => (
              <Card
                id={post?.id}
                key={index}
                hasDate={true}
                date={post?.date.seconds}
                author={post.author}
                image={post?.image}
                title={post?.title}
                isAdmin={true}
                exclude={() => confirmExclude(post)}
                edit={() => edit(post)}
              >
                {post.text}
              </Card>
            ))}
          </S.PostFlex>
          <Pagination />
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
            <button
              onClick={() => (
                exclude(postInfo), setOpenConfirmationModal(false)
              )}
              className="confirm-button"
            >
              SIM, EXCLUIR
            </button>
          </S.Options>
        </S.ConfirmExclude>
      </Modal>
    </Layout>
  );
};

export default AdminTemplate;
