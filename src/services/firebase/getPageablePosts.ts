/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function initialRequest(
  LIMIT: number,
  setPosts: any,
  setLastVisible: any,
) {
  const postContent: any = [];
  const firstContent = query(
    collection(db, "posts"),
    orderBy("date", "desc"),
    limit(LIMIT),
  );
  const getFistContentData = await getDocs(firstContent);

  getFistContentData?.forEach((doc) => {
    const newData = {
      ...doc.data(),
      documentId: doc.id,
    };

    postContent.push(newData);
  });

  setPosts(postContent);
  setLastVisible(getFistContentData.docs[getFistContentData.docs.length - 1]);
}
