/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
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
import { initialRequest } from "../../services/firebase/getPageablePosts";

const LIMIT = 12;
const LOAD = 4;

const BlogTemplate = () => {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [showContent, setShowContent] = useState(1);
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const [lastVisible, setLastVisible] = useState<any>(null);

  useEffect(() => {
    initialRequest(LIMIT, setPosts, setLastVisible);
  }, []);

  // MORE POSTS

  async function getMorePosts() {
    const nextContent = query(
      collection(db, "posts"),
      orderBy("date", "desc"),
      limit(LOAD),
      startAfter(lastVisible),
    );

    const getNextContentData = await getDocs(nextContent);

    getNextContentData?.forEach((doc: QueryDocumentSnapshot) => {
      const newPosts: PostTypes = {
        ...doc.data(),
      };

      setPosts((prev: PostTypes[]) => [...prev, newPosts]);

      setLastVisible(
        getNextContentData?.docs[getNextContentData?.docs?.length - 1],
      );

      console.log(getNextContentData?.docs.length);

      if (getNextContentData?.docs.length <= LOAD) setDisableBtn(true);
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
            {posts?.map((post: PostTypes, index: number) => (
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
