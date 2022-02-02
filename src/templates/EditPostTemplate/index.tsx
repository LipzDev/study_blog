import React from "react";
import Input from "../../components/atoms/Input";
import Textarea from "../../components/atoms/Textarea";
import Button from "../../components/atoms/Button";
import * as S from "./styles";
import { posts } from "../BlogTemplate/mock";

type EditPostTemplate = {
  url?: string | string[];
};

const EditPostTemplate = ({ url }: EditPostTemplate) => {
  return (
    <S.Container>
      {posts.map(
        (post, index) =>
          post.id === Number(url) && (
            <S.Form key={index}>
              <input type="file" />
              <Input placeholder="Título" value={post.title} />
              <Input placeholder="Descrição" value={post.description} />
              <Textarea placeholder="Mensagem" value={post.text} />
              <Button themeColor="primary">Salvar</Button>
            </S.Form>
          ),
      )}
    </S.Container>
  );
};

export default EditPostTemplate;
