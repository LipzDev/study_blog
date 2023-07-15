/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Input from "../../components/atoms/Input";
import Textarea from "../../components/atoms/Textarea";
import Button from "../../components/atoms/Button";
import { useManagePosts } from "../../hooks/useManagePosts";

import { PostTypes } from "../../types/types";
import { getPosts } from "../../services/firebase/getPosts";
import * as S from "./styles";
import { ReactSVG } from "react-svg";

type EditPostTemplate = {
  url?: string | string[];
};

const EditPostTemplate = ({ url }: EditPostTemplate) => {
  const [allPosts, setAllPosts] = useState<PostTypes[]>([]);
  const { updatePost, setImage, image } = useManagePosts();
  const inputRef = React.useRef<any>(null);
  const filePicker = () => {
    inputRef.current.click();
  };

  // Form content

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  // Comentário abaixo deveria puxar apenas o item do id passado na url

  // useEffect(() => {
  //   const dataQuery = query(collection(db, "posts"), where("NÃO CONSIGO PEGAR O ID DO POST", "==", id));
  //   const getContent: any = getDocs(dataQuery);

  //   getContent.then((data: any) =>
  //     data.forEach((post: any) => {
  //       setAllPosts([post.data()]);
  //     }),
  //   );
  // }, []);

  // Puxa todos os posts

  useEffect(() => {
    getPosts().then((response: PostTypes[]) => setAllPosts(response));
  }, []);

  const formContent = {
    title: title,
    author: author,
    text: text,
    image: `https://firebasestorage.googleapis.com/v0/b/blog-47a62.appspot.com/o/image%2F${image?.name}?alt=media`,
    imagePath: image?.name,
  };

  function handleClickToUpload(event: any) {
    event.preventDefault();
    updatePost(formContent);
  }

  return (
    <S.Container>
      {allPosts?.map(
        (post: PostTypes, index: number) =>
          post.documentId === url && (
            <S.Form key={index}>
              {/* <input
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e: any) => setImage(e.target.files[0])}
              /> */}

              <S.TopContent>
                <label htmlFor="#icon" onClick={() => filePicker()}>
                  <img src={`/icons/iconImg.png`} />
                  <p>{image ? image?.name : <>Carregar Imagem</>}</p>
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
