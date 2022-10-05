export type IUser = {
  user?: {
    name: string;
    username: string;
    password: string;
    email: string;
    imageUrl: string;
    workspaceIDs: [];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  token: string;
}