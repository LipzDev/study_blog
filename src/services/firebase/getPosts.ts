/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  collection,
  getDocs,
  orderBy,
  Query,
  limit,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { PostTypes } from "../../types/types";

export const getPosts = async () => {
  const postContent: PostTypes[] = [];

  const dataQuery: Query = query(
    collection(db, "posts"),
    orderBy("date", "desc"),
  );
  const getContent = await getDocs(dataQuery);

  getContent.forEach((doc: QueryDocumentSnapshot) => {
    const newData: PostTypes = {
      ...doc.data(),
      documentId: doc.id,
    };

    postContent.push(newData);
  });

  return postContent;
};

//
