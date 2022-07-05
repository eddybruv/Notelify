import React, {FC, ReactNode, SetStateAction, useContext} from "react";
import style from "./styles/option.module.css"
import HomeContext from "../../../HomeContext";
import Home from "../../../pages/Home"

interface Props {
  icon: ReactNode;
  text: string;
  component: SetStateAction<JSX.Element>;
}

interface ContextType {
  content?: JSX.Element;
  setContent?:  React.Dispatch<React.SetStateAction<JSX.Element>>
}

const Options = ({icon, text, component}: Props) => {
  let {content, setContent} = useContext(HomeContext) as ContextType;

  const handleSwitch = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setContent && setContent(component);
    console.log(content);
  }

  return (
    <div onClick={handleSwitch} className={style.navBox}>
      {icon}
      <p>{text}</p>
    </div>
  )
}

export default Options