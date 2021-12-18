import React from "react";
import Link from "next/link";
import * as S from "./styles";

type CardProps = {
  large?: boolean;
  image?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  id?: string;
};

const Card = ({
  id,
  large,
  image,
  title,
  description,
  children,
}: CardProps) => {
  return large ? (
    <Link href={`/post/${id}`}>
      <S.LargeCard>
        <img src={image}></img>
        <h1>{title}</h1>
        <h2>{description}</h2>

        <p>{children}</p>
        <a href="#">LER MAIS</a>
      </S.LargeCard>
    </Link>
  ) : (
    <Link href={`/post/${id}`}>
      <S.SmallCard>
        <img src={image}></img>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p>{children}</p>
      </S.SmallCard>
    </Link>
  );
};

export default Card;
