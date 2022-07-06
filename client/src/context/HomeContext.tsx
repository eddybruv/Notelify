import React, {createContext, useState, FC, ReactNode} from "react";
import ViewNotes from "../components/Notes/NotesBody";

export interface IHomeContext {
  content?: JSX.Element;
  setContent?:  React.Dispatch<React.SetStateAction<JSX.Element>>
}

interface IComponent {
  children?: ReactNode;
}

const HomeContext = createContext<IHomeContext | null>(null);

export const HomeProvider: FC<IComponent> = ({children}: IComponent) => {
  const [content, setContent] = useState(<ViewNotes/>);

  return (
    <HomeContext.Provider value={{content, setContent}}>
      {children}
    </HomeContext.Provider>
  )
}

export default HomeContext;