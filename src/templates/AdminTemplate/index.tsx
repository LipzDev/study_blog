import React from "react";
import Head from "next/head";
import ButtonReturn from "../../components/ButtonReturn";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import * as S from "./styles";

const AdminTemplate = () => {
  const route = useRouter();

  function exclude() {
    cookie.remove("auth-token");
    route.push("/login");
  }

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!document.cookie || !document.cookie.includes('auth-token')){
        window.location.href="/login"
      }`,
          }}
        />
      </Head>
      <S.Container>
        <ButtonReturn returnTo="/blog" />
        <button onClick={() => exclude()}>SAIR</button>
      </S.Container>
    </>
  );
};

export default AdminTemplate;
