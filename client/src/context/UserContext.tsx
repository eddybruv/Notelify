import React, {createContext, ReactNode, FC, useState} from "react";
import {IUser} from '../types/user.types'

interface IComponent {
  children?: ReactNode;
}

export const UserContext = createContext<IUser | {}>({});

export const UserProvider: FC<IComponent> = ({children}: IComponent) => {
  const [user, setUser] = useState ({} as IUser);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}