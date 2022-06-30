import React, {FC} from "react";
import logo from "../assets/logo1.png"
import style from "../styles/navbar.module.css"

const Navbar: FC = () => {
  return (
    <section className={style.body}>
      <section className={style.content}>
        <section className={style.top}>
          <section className={style.workspaceInfo}>
            <section className={style.info}>
              <section className={style.photoBox}>
                <img src={logo} alt=""/>
              </section>
            </section>
          </section>
          <section className={style.navs}></section>
        </section>
        <section className={style.bottom}></section>
      </section>
    </section>
  )
}

export default Navbar