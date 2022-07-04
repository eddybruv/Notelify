import {createContext, useState, FC} from "react";
import ViewNotes from "./components/Notes/ViewNotes";

interface IHomeContext {
  component: JSX.Element;
}

const HomeContext = createContext<IHomeContext | null>(null);

const HomeProvider = ({component} : IHomeContext) => {
  const [content, setContent] = useState(<ViewNotes/>);

  return (
    <HomeContext.Provider value={{content, setContent}}>

    </HomeContext.Provider>
  )
}

export default HomeContext;