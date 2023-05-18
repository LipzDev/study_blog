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

//

export interface ITokenContent {
  iss: string;
  aud: string;
  auth_time: number;
  user_id: string;
  sub: string;
  iat: number;
  exp: number;
  email: string;
  email_verified: boolean;
  firebase: IFirebase;
}

export interface IFirebase {
  identities: IIdentities;
  sign_in_provider: string;
}

export interface IIdentities {
  email: string[];
}
