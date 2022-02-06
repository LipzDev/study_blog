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
import { customStyles } from "./styles";
import { useRouter } from "next/router";
import { storage, db } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";
import { nanoid } from "nanoid";
import * as S from "./styles";
import { DataTypes } from "../BlogTemplate";

const AdminTemplate = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const route = useRouter();

  // FORM CONTENT

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage]: any = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const imageRef = ref(storage, `image/${image?.name}`);

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
    id: nanoid(),
    author: author,
    title: title,
    description: description,
    date: Timestamp.fromDate(new Date()),
    image: image?.name === undefined ? "" : image?.name,
    text: text,
  };

  async function handleClickToUpload(event: any) {
    event.preventDefault();

    try {
      await uploadBytes(imageRef, image);
      await addDoc(collection(db, "posts"), docData);
      alert("Postagem efetuada com sucesso!");
      closeModal();
    } catch (e) {
      alert("Erro ao criar postagem :(");
    }
  }

  // EXIBIR POSTAGENS

  const [data, setData] = useState<DataTypes>();
  const posts: any = [];

  async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      posts.push({ ...doc.data() });
    });
    setData(posts);
  }

  useEffect(() => {
    if (data !== undefined) getPosts();
  }, []);

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
            {data === undefined && <p>Não há postagens no momento!</p>}
            {posts
              .slice()
              .reverse()
              .map((post: any, index: number) => (
                <Card
                  id={post?.id}
                  key={index}
                  large={true}
                  image={
                    "https://i0.wp.com/multarte.com.br/wp-content/uploads/2018/12/fundo-preto-background.png?resize=696%2C392&ssl=1"
                  }
                  title={post?.title}
                  description={post?.description}
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
          <Input placeholder="Título" setValueToForm={setTitle} />
          <Input placeholder="Author" setValueToForm={setAuthor} />
          <Input placeholder="Descrição" setValueToForm={setDescription} />
          <Textarea placeholder="Mensagem" setValueToForm={setText} />
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
