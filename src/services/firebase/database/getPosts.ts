/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  collection,
  getDocs,
  orderBy,
  Query,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import { PostTypes } from "../../../types/types";

export const getPosts = async () => {
  const posts: any = [];

  const dataQuery: Query = query(
    collection(db, "posts"),
    orderBy("date", "desc"),
  );
  const getContent = await getDocs(dataQuery);

  getContent.forEach((doc: QueryDocumentSnapshot) => {
    posts.push({ ...doc.data() } as PostTypes);
  });

  return posts;
};
