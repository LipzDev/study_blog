import React from "react";
import Link from "next/link";
import * as S from "./styles";
import MediaMatch from "../MediaMatch";

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
        <a href="#">LER MAIS</a>
      </S.LargeCard>
    </Link>
  ) : (
    <MediaMatch greaterThan="large">
      <Link href={`/post/${id}`}>
        <S.SmallCard>
          <img src={image}></img>
          <h1>{title}</h1>
          <h2>{description}</h2>
          <p>{children}</p>
        </S.SmallCard>
      </Link>
    </MediaMatch>
  );
};

export default Card;
