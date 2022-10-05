import React, {createContext, ReactNode, FC, useState, useEffect, useContext} from "react";
import {IUser} from '../types/user.types';
import {useNavigate} from 'react-router-dom';

interface IComponent {
  children?: ReactNode;
}

export const UserContext = createContext<IUser | {}>({});

export const UserProvider: FC<IComponent> = ({children}: IComponent) => {
  const [user, setUser] = useState ({} as IUser);
  const navigate = useNavigate();
  
  useEffect(() => {
    const data = localStorage.getItem('userInfo');
    const userInfo: IUser = data && JSON.parse(data);
    setUser(userInfo);

    if(!userInfo) {
      navigate('/home')
    }
  
  }, [navigate])

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export const UserState = () => {
  return useContext(UserContext)
}