import React, {createContext, Dispatch, ReactNode, SetStateAction, FC, useState} from "react";

export interface IUserContext {
  user?: null;
  setUser?: Dispatch<SetStateAction<JSX.Element>>;
}

interface IComponent {
  children?: ReactNode;
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserProvider: FC<IComponent> = ({children}: IComponent) => {
  const [user, setUser] = useState<IUserContext | null>(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}