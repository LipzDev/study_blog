import React from "react";
import Head from "next/head";
import ButtonReturn from "../../components/ButtonReturn";

import * as S from "./styles";
import Header from "../../components/Header";

const AdminTemplate = () => {
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
      <Header isLoggedIn={true} />
      <S.Container>
        <ButtonReturn returnTo="/blog" />
        <h1>Olá</h1>
      </S.Container>
    </>
  );
};

export default AdminTemplate;
