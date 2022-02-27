/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  query,
  orderBy,
  limit,
  collection,
  getDocs,
  QueryDocumentSnapshot,
  Query,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import { PostTypes } from "../../../types/types";

export const getRecentPosts = async () => {
  const posts: any = [];

  const dataQuery: Query = query(
    collection(db, "posts"),
    orderBy("date", "desc"),
    limit(5),
  );
  const getContent = await getDocs(dataQuery);

  getContent.forEach((doc: QueryDocumentSnapshot) => {
    posts.push({ ...doc.data() } as PostTypes);
  });

  return posts;
};
