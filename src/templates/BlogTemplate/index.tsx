/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { PostTypes } from "../../types/types";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import Card from "../../components/molecules/Card";
import Layout from "../../components/molecules/Layout";
import Pagination from "../../components/molecules/Pagination";
import * as S from "./styles";

const BlogTemplate = () => {
  const [posts, setPosts] = useState<any>([]);
  const [showContent, setShowContent] = useState(1);
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const [lastVisible, setLastVisible] = useState<any>(null);
  let postContent: PostTypes[] = [];

  async function initialRequest() {
    const firstContent = query(
      collection(db, "posts"),
      orderBy("date", "desc"),
      limit(12),
    );
    const getFistContentData = await getDocs(firstContent);

    getFistContentData?.forEach((doc: QueryDocumentSnapshot) => {
      const newData: PostTypes = {
        ...doc.data(),
      };

      postContent.push(newData);
    });

    setPosts(postContent);
    setLastVisible(getFistContentData.docs[getFistContentData.docs.length - 1]);
  }

  useEffect(() => {
    initialRequest();
  }, []);

  // MORE POSTS

  async function getMorePosts() {
    const nextContent = query(
      collection(db, "posts"),
      orderBy("date", "desc"),
      limit(4),
      startAfter(lastVisible),
    );

    const getNextContentData = await getDocs(nextContent);

    getNextContentData?.forEach((doc: QueryDocumentSnapshot) => {
      const newPosts: PostTypes = {
        ...doc.data(),
      };

      setPosts((prev: any) => [...prev, newPosts]);

      setLastVisible(
        getNextContentData?.docs[getNextContentData?.docs?.length - 1],
      );

      if (getNextContentData?.docs.length < 4) setDisableBtn(true);
    });
  }

  useEffect(() => {
    getMorePosts();
  }, [showContent]);

  return (
    <Layout>
      <S.Wrapper>
        <S.Container>
          <ButtonReturn returnTo="/" />

          <S.FeaturedPost>
            {posts?.map((post: any, index: number) => (
              <Card
                id={post?.id}
                key={index}
                hasDate={true}
                date={post?.date?.seconds}
                author={post?.author}
                image={post?.image}
                title={post?.title}
              >
                {post?.text}
              </Card>
            ))}
          </S.FeaturedPost>
        </S.Container>
        <Pagination
          setShowContent={setShowContent}
          showContent={showContent}
          disableBtn={disableBtn}
        />
      </S.Wrapper>
    </Layout>
  );
};

export default BlogTemplate;
