/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { DataTypes } from "../../../templates/BlogTemplate";

const GetAllPosts = () => {
  const [data, setData] = useState<DataTypes>();
  const posts: any = [];

  async function getPosts() {
    const q: any = query(collection(db, "posts"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc: any) => {
      posts.push({ ...doc.data() });
    });
    setData(posts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return data;
};

export default GetAllPosts;
