import React from "react";
import PostTemplate from "../../templates/PostTemplate";
import { useRouter } from "next/router";

const IdCallPost = () => {
  const { query } = useRouter();
  return <PostTemplate url={query.id} />;
};

export default IdCallPost;
