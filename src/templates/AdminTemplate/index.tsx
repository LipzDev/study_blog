/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useContext } from "react";
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
import { useManagePosts } from "../../hooks/useManagePosts";
import { getPosts } from "../../services/firebase/getPosts";
import { nanoid } from "nanoid";
import * as S from "./styles";
import Pagination from "../../components/molecules/Pagination";
import { UserContext } from "../../context/user";
import { ReactSVG } from "react-svg";

const AdminTemplate = () => {
  const {
    posts,
    setPosts,
    addPost,
    removePost,
    setImage,
    image,
    refreshPage,
    setPostToEdit,
  } = useManagePosts();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [post, setPost] = useState<PostTypes>("" as PostTypes);
  const inputRef = React.useRef<any>(null);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const router = useRouter();
  const { signed } = useContext(UserContext);

  const filePicker = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    if (!signed) {
      router.push("/login");
    }
  }, [signed]);

  // Puxa o conteúdo do firebase.

  useEffect(() => {
    getPosts()?.then((response: PostTypes[]) => setPosts(response));
  }, [refreshPage]);

  // Informações a serem enviadas

  const formData = {
    id: nanoid(),
    slug: "",
    author: author,
    title: title,
    date: Timestamp.fromDate(new Date()),
    image: `https://firebasestorage.googleapis.com/v0/b/blog-47a62.appspot.com/o/image%2F${image?.name}?alt=media`,
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
    setPostToEdit(post);
    router.push(`/admin/editar-postagem/${post.documentId}`);
  }

  // Fecha o modal

  function closeModal() {
    setModalIsOpen(false);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  // Verifica se esta vazio

  function checkEmpty(...content: any[]) {
    for (let i = 0; i < content?.length; i++) {
      const valor = content[i];
      if (valor === "" || valor === null || valor === undefined) {
        return true; // Encontrou um valor vazio, nulo ou indefinido, retorna true
      }
    }
    return false; // Não encontrou nenhum valor vazio, nulo ou indefinido, retorna false
  }

  return (
    signed && (
      <Layout isLoggedIn={true}>
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
                  date={post?.date?.seconds}
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
            {/* <Pagination
            setShowContent={setShowContent}
            showContent={showContent}
            disableBtn={disableBtn}
          /> */}
          </S.Container>
        </S.Wrapper>

        {/* MODAL FORM */}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <S.Form>
            <S.TopContent>
              <label htmlFor="#icon" onClick={() => filePicker()}>
                <img src={`/icons/iconImg.png`} />
                <p>
                  {image ? (
                    image?.name
                  ) : (
                    <>
                      Carregar Imagem <span>*</span>
                    </>
                  )}
                </p>
              </label>

              {image && (
                <ReactSVG
                  src="/icons/close.svg"
                  wrapper="span"
                  onClick={() => setImage("")}
                />
              )}
            </S.TopContent>

            <input
              type="file"
              value=""
              multiple={false}
              accept="image/*"
              onChange={(e: any) => setImage(e.target.files[0])}
              style={{ visibility: "hidden", opacity: 0, width: "1px" }}
              ref={inputRef}
            />
            <Input placeholder="Título" setValueToForm={setTitle} required />
            <Input placeholder="Author" setValueToForm={setAuthor} required />
            <Textarea
              placeholder="Mensagem"
              setValueToForm={setText}
              required
            />
            <Button
              themeColor="primary"
              onClick={(event: void) => handleClickToUpload(event)}
              disabled={checkEmpty(image, title, author, text)}
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
    )
  );
};

export default AdminTemplate;
