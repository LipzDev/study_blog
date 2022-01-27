import React from "react";
import Link from "next/link";
import * as S from "./styles";
import Button from "../Button";

type CardProps = {
  large?: boolean;
  image?: string;
  title?: string;
  author?: string;
  date?: string;
  description?: string;
  hasDate?: boolean;
  children?: React.ReactNode;
  id?: number;
  isAdmin?: boolean;
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
}: CardProps) => {
  return large ? (
    <Link href={`/post/${id}`}>
      <S.LargeCard>
        <img src={image}></img>
        {hasDate && (
          <>
            <span>{author}</span> - <span>{date}</span>
          </>
        )}
        <h1>{title}</h1>
        <h2>{description}</h2>

        <p>{children}</p>
        <Button buttonStyle="link">LER MAIS</Button>
      </S.LargeCard>
    </Link>
  ) : (
    <Link href={`/post/${id}`}>
      <S.SmallCard>
        <img src={image}></img>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p>{children}</p>

        {isAdmin && (
          <S.Options>
            <Button buttonStyle="link">Editar</Button>
            <Button buttonStyle="link">Excluir</Button>
          </S.Options>
        )}
      </S.SmallCard>
    </Link>
  );
};

export default Card;
