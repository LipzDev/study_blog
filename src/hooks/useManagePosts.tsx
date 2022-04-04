/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "./toast";
import { storage, db } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { PostTypes } from "../types/types";
import { getPosts } from "../services/firebase/database/getPosts";

interface PostsContext {
  children: React.ReactNode;
}

const PostContext = createContext({} as any);

export const PostProvider = ({ children }: PostsContext) => {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [image, setImage]: any = useState("");
  const { addToast } = useToast();
  const imageRef = ref(storage, `image/${image?.name}`);

  async function addPost(post: PostTypes[]) {
    try {
      await uploadBytes(imageRef, image);
      const newPost = await addDoc(collection(db, "posts"), post);

      const newObject = {
        ...post,
        documentId: newPost.id,
      };

      console.log(newObject, "ESSE É O OBJ");
      console.log(posts, "ESSE É O POSTS");

      addToast({
        title: "Postagem enviada com sucesso!",
        type: "success",
        duration: 5000,
      });

      setPosts((prev: any) => [...prev, newObject]);
    } catch (e) {
      addToast({
        title: "Erro ao criar postagem",
        type: "error",
        duration: 5000,
      });
    }
  }

  async function removePost(id: string) {
    try {
      console.log("esse aqui", id);
      await deleteDoc(doc(db, "posts", id));

      addToast({
        title: "Publicação excluida com sucesso!",
        type: "success",
        duration: 5000,
      });

      setPosts((prev: PostTypes[]) =>
        prev.filter((posts: PostTypes) => posts.documentId !== id),
      );
    } catch (e) {
      addToast({
        title: "Erro ao excluir publicação",
        type: "error",
        duration: 5000,
      });
    }
  }

  function updatePost(post: PostTypes) {
    setPosts((prev: any) =>
      prev.map((p: any) => (p.id === post.id ? post : p)),
    );
  }

  return (
    <PostContext.Provider
      value={{
        setPosts,
        posts,
        addPost,
        removePost,
        updatePost,
        setImage,
        image,
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
