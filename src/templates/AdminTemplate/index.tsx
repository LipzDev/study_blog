import React from "react";
import Head from "next/head";

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
      <div>PÁGINA DO ADM</div>;
    </>
  );
};

export default AdminTemplate;
