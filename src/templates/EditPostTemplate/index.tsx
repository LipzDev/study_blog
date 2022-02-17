/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Input from "../../components/atoms/Input";
import Textarea from "../../components/atoms/Textarea";
import Button from "../../components/atoms/Button";
import data from "../../services/firebase/database/getPosts";
import { storage, db } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { doc, Timestamp, setDoc } from "firebase/firestore";
import { useToast } from "../../hooks/toast";
import { useRouter } from "next/router";
import * as S from "./styles";

type EditPostTemplate = {
  url?: string | string[];
};

const EditPostTemplate = ({ url }: EditPostTemplate) => {
  const getAllPosts = data();
  const { addToast } = useToast();
  const route = useRouter();

  // FORM CONTENT

  const [title, setTitle] = useState("");
  const [image, setImage]: any = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const imageRef = ref(storage, `image/${image?.name}`);

  const docData = {
    id: url,
    author: author,
    title: title,
    date: Timestamp.fromDate(new Date()),
    image:
      image?.name === undefined
        ? "/img/att.jpg"
        : `https://firebasestorage.googleapis.com/v0/b/blog-47a62.appspot.com/o/image%2F${image?.name}?alt=media`,
    text: text,
  };

  console.log(docData.title);
  console.log(docData.author);

  async function handleClickToUpload(event: any) {
    event.preventDefault();

    try {
      await uploadBytes(imageRef, image);
      // DEVEMOS ADICIONAR O ID DO POST QUE QUEREMOS EDITAR NO CAMPO ABAIXO (docData.id)
      const postRef = doc(db, "posts", docData.id as any);
      setDoc(postRef, docData, { merge: true });

      addToast({
        title: "Postagem editada com sucesso!",
        type: "success",
        duration: 5000,
      });

      route.push("/admin");
    } catch (e) {
      addToast({
        title: "Erro ao criar postagem",
        type: "error",
        duration: 5000,
      });
    }
  }

  return (
    <S.Container>
      {getAllPosts?.map(
        (post: any, index: number) =>
          post.id === url && (
            <S.Form key={index}>
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e: any) => setImage(e.target.files[0])}
                // value="https://firebasestorage.googleapis.com/v0/b/blog-47a62.appspot.com/o/image%2F${image?.name}?alt=media"
              />
              <Input
                placeholder="Título"
                setValueToForm={setTitle}
                initialValue={post.title}
              />
              <Input
                placeholder="Author"
                setValueToForm={setAuthor}
                initialValue={post.author}
              />
              <Textarea
                placeholder="Mensagem"
                setValueToForm={setText}
                initialValue={post.text}
              />
              <Button
                themeColor="primary"
                onClick={(event: void) => handleClickToUpload(event)}
              >
                Salvar
              </Button>
            </S.Form>
          ),
      )}
    </S.Container>
  );
};

export default EditPostTemplate;
