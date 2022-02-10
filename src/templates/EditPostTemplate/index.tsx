/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Input from "../../components/atoms/Input";
import Textarea from "../../components/atoms/Textarea";
import Button from "../../components/atoms/Button";
import data from "../../services/firebase/database/getPosts";
import { nanoid } from "nanoid";
import { storage, db } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useToast } from "../../hooks/toast";
import * as S from "./styles";

type EditPostTemplate = {
  url?: string | string[];
};

const EditPostTemplate = ({ url }: EditPostTemplate) => {
  const getAllPosts = data();
  const { addToast } = useToast();

  // FORM CONTENT

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage]: any = useState("");
  const [author, setAuthor] = useState("");
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const imageRef = ref(storage, `image/${image?.name}`);

  const docData = {
    id: nanoid(),
    author: author,
    title: title,
    description: description,
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
      await addDoc(collection(db, "posts"), docData);
      addToast({
        title: "Postagem enviada com sucesso!",
        type: "success",
        duration: 5000,
      });
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
                Salvar
              </Button>
            </S.Form>
          ),
      )}
    </S.Container>
  );
};

export default EditPostTemplate;
