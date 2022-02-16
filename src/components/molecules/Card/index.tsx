import React from "react";
import Link from "next/link";
import * as S from "./styles";
import Button from "../../atoms/Button";

type CardProps = {
  large?: boolean;
  image?: string;
  title?: string;
  author?: string;
  date?: string;
  hasDate?: boolean;
  children?: React.ReactNode;
  id?: string;
  isAdmin?: boolean;
  exclude?: () => void;
  edit?: () => void;
};

const Card = ({
  id,
  large,
  hasDate,
  image,
  title,
  author,
  date,
  children,
  isAdmin,
  exclude,
  edit,
}: CardProps) => {
  return large ? (
    <S.LargeCard>
      <S.ContainerTop>
        <Link href={`/post/${id}`}>
          <img src={image} loading="lazy"></img>
        </Link>
      </S.ContainerTop>
      <S.ContainerBottom>
        {hasDate && (
          <>
            <span>{author}</span> - <span>{date}</span>
          </>
        )}
        <h1>{title}</h1>

        <p>{children}</p>
        <Link href={`/post/${id}`}>
          <Button buttonStyle="link">LER MAIS</Button>
        </Link>
      </S.ContainerBottom>
    </S.LargeCard>
  ) : (
    <S.SmallCard>
      <S.CardTop>
        <Link href={`/post/${id}`}>
          <img src={image} loading="lazy"></img>
        </Link>
      </S.CardTop>

      <S.CardBottom>
        {hasDate && (
          <S.PostInfo>
            <span>{author}</span>
            <small>-</small>
            <span>{date}</span>
          </S.PostInfo>
        )}
        <h1>{title}</h1>
        <p>{children}</p>

        {!isAdmin && (
          <S.Button>
            <Link href={`/post/${id}`}>
              <Button buttonStyle="link">LER MAIS</Button>
            </Link>
          </S.Button>
        )}

        {isAdmin && (
          <S.Button>
            <Button buttonStyle="link" className="left-button" onClick={edit}>
              Editar
            </Button>
            <Button buttonStyle="link" onClick={exclude}>
              Excluir
            </Button>
          </S.Button>
        )}
      </S.CardBottom>
    </S.SmallCard>
  );
};

export default Card;
