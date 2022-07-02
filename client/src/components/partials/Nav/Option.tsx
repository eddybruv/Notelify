import React, {FC, ReactNode} from "react";
import style from "./styles/option.module.css"

interface Props {
  icon: ReactNode;
  text: string;
}

const Options = ({icon, text}: Props) => {
  return (
    <div className={style.navBox}>
      {icon}
      <p>{text}</p>
    </div>
  )
}

export default Options