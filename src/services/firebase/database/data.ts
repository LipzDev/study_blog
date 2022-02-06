/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { DataTypes } from "../../../templates/BlogTemplate";

const Date = () => {
  const [data, setData] = useState<DataTypes>();
  const posts: any = [];

  async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "posts"));

    querySnapshot.forEach((doc) => {
      posts.push({ ...doc.data() });
    });
    setData(posts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return data;
};

export default Date;
