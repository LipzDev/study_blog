import React from "react";
import EditPostTemplate from "../../../templates/EditPostTemplate";
import { useRouter } from "next/router";

const IdCallPost = () => {
  const { query } = useRouter();
  return <EditPostTemplate url={query.id} />;
};

export default IdCallPost;
