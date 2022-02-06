/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { DataTypes } from "../../../templates/BlogTemplate";

const RecentPosts = () => {
  const [data, setData] = useState<DataTypes>();
  const posts: any = [];

  async function getRecentPosts() {
    const q: any = query(
      collection(db, "posts"),
      orderBy("date", "desc"),
      limit(5),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc: any) => {
      posts.push({ ...doc.data() });
    });
    setData(posts);
  }

  useEffect(() => {
    getRecentPosts();
  }, []);

  return data;
};

export default RecentPosts;
