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
  description?: string;
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
  description,
  children,
  isAdmin,
  exclude,
  edit,
}: CardProps) => {
  return large ? (
    <S.LargeCard>
      <Link href={`/post/${id}`}>
        <img src={image} className="skeleton" loading="lazy"></img>
      </Link>
      {hasDate && (
        <>
          <span>{author}</span> - <span>{date}</span>
        </>
      )}
      <h1>{title}</h1>
      <h2>{description}</h2>

      <p>{children}</p>
      <Link href={`/post/${id}`}>
        <Button buttonStyle="link">LER MAIS</Button>
      </Link>
    </S.LargeCard>
  ) : (
    <S.SmallCard>
      <Link href={`/post/${id}`}>
        <img src={image} className="skeleton" loading="lazy"></img>
      </Link>
      {hasDate && (
        <S.PostInfo>
          <span>{author}</span>
          <small>-</small>
          <span>{date}</span>
        </S.PostInfo>
      )}
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{children}</p>

      {!isAdmin && (
        <Link href={`/post/${id}`}>
          <Button buttonStyle="link">LER MAIS</Button>
        </Link>
      )}

      {isAdmin && (
        <S.Options>
          <Button buttonStyle="link" onClick={edit}>
            Editar
          </Button>
          <Button buttonStyle="link" onClick={exclude}>
            Excluir
          </Button>
        </S.Options>
      )}
    </S.SmallCard>
  );
};

export default Card;
