/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PostTypes {
  id?: string;
  documentId?: string;
  slug?: string;
  author?: string;
  title?: string;
  date?: {
    seconds?: number;
  };
  imagePath?: string;
  image?: string;
  text?: string;
}
