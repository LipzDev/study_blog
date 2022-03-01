/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Button from "../../atoms/Button";
import timestamp from "time-stamp";
import * as S from "./styles";

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
  const dateTime = new Date((date as any) * 1000);
  const formatedDate = timestamp("DD/MM/YYYY", dateTime);

  return large ? (
    <S.LargeCard>
      <S.ContainerTop>
        <Link href={`/post/${id}`}>
          <img src={image}></img>
        </Link>
      </S.ContainerTop>
      <S.ContainerBottom>
        {hasDate && (
          <S.Date>
            <span>{author ? author : "Desconhecido"}</span> |{" "}
            <span className="dateNumber">
              <img src="/icons/clock.svg" alt="icon" title={formatedDate} />
              {formatedDate}
            </span>
          </S.Date>
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
          <img src={image}></img>
        </Link>
      </S.CardTop>

      <S.CardBottom>
        {hasDate && (
          <S.Date>
            <span>{author ? author : "Desconhecido"}</span> |{" "}
            <span className="dateNumber">
              <img src="/icons/clock.svg" alt="icon" title={formatedDate} />
              {formatedDate}
            </span>
          </S.Date>
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
