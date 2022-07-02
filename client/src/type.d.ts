interface IUser {
  _id: string,
  name: string,
  username: string,
  email: string,
  password: string,
  imageUrl: string,
  workspaceIDs: string[];
  createdAt?: string,
  updatedAt?: string,
}

interface UserProps {
  user: IUser;
}

