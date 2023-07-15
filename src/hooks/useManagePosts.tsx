/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState } from "react";
import { useToast } from "./toast";
import { storage, db } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { PostTypes } from "../types/types";
import router from "next/router";

interface PostsContext {
  children: React.ReactNode;
}

const PostContext = createContext({} as any);

export const PostProvider = ({ children }: PostsContext) => {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [image, setImage] = useState<any>("");
  const [postToEdit, setPostToEdit] = useState<PostTypes>({});
  const [refreshPage, setRefreshPage] = useState<boolean>(false);
  const { addToast } = useToast();

  async function addPost(post: PostTypes[]) {
    const imageRef = ref(storage, `image/${image?.name}`);
    await uploadBytes(imageRef, image);
    setImage("");

    try {
      const newPost = await addDoc(collection(db, "posts"), post);

      const newObject = {
        ...post,
        documentId: newPost.id,
      };

      addToast({
        title: "Postagem criada com sucesso!",
        type: "success",
        duration: 5000,
      });

      setPosts((prev: PostTypes[]) => [newObject, ...prev]);

      setTimeout(() => {
        setRefreshPage(!refreshPage);
      }, 1000);

      //
    } catch (e) {
      addToast({
        title: "Ocorreu um erro ao criar esta postagem.",
        type: "error",
        duration: 5000,
      });
    }
  }

  async function removePost(id: string) {
    try {
      await deleteDoc(doc(db, "posts", id));

      addToast({
        title: "Publicação excluida com sucesso!",
        type: "success",
        duration: 5000,
      });

      setTimeout(() => {
        setRefreshPage(!refreshPage);
      }, 1000);

      //
    } catch (e) {
      addToast({
        title: "Erro ao excluir publicação",
        type: "error",
        duration: 5000,
      });
    }
  }

  async function updatePost(newPostToUpload: PostTypes) {
    try {
      const imageRef = ref(storage, `image/${image?.name}`);
      await uploadBytes(imageRef, image);
      setImage("");

      const postRef = doc(db, "posts", postToEdit.documentId as string);
      setDoc(postRef, newPostToUpload, { merge: true });

      addToast({
        title: "Postagem editada com sucesso!",
        type: "success",
        duration: 5000,
      });

      router.push("/admin");

      setTimeout(() => {
        setRefreshPage(!refreshPage);
      }, 1000);

      //
    } catch (e) {
      addToast({
        title: "Erro ao criar postagem",
        type: "error",
        duration: 5000,
      });
    }
  }

  return (
    <PostContext.Provider
      value={{
        setPosts,
        posts,
        setRefreshPage,
        refreshPage,
        addPost,
        removePost,
        updatePost,
        setImage,
        image,
        postToEdit,
        setPostToEdit,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export function useManagePosts() {
  const context = useContext(PostContext);
  return context;
}
