/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import {
  collection,
  endAt,
  endBefore,
  getDocs,
  limit,
  orderBy,
  Query,
  query,
  QueryDocumentSnapshot,
  startAfter,
  startAt,
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
  const [lastVisible, setLastVisible] = useState<any>(null);
  let postContent: PostTypes[] = [];

  async function initialRequest() {
    const firstContent = query(
      collection(db, "posts"),
      orderBy("date", "desc"),
      limit(8),
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
  }, [showContent]);

  // MORE POSTS

  async function getMorePosts() {
    const nextContent = query(
      collection(db, "posts"),
      orderBy("date", "desc"),
      startAfter(lastVisible),
      limit(8),
    );

    const getNextContentData = await getDocs(nextContent);

    getNextContentData?.forEach((doc: QueryDocumentSnapshot) => {
      const newData: PostTypes = {
        ...doc.data(),
      };

      postContent.push(newData);

      setPosts([...posts, newData]);
      setLastVisible(
        getNextContentData?.docs[getNextContentData?.docs?.length - 1],
      );
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
        <Pagination setShowContent={setShowContent} showContent={showContent} />
      </S.Wrapper>
    </Layout>
  );
};

export default BlogTemplate;
