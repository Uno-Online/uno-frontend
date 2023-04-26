import { useState } from "react";

import { FormGuest, FormUser } from "@/components";
import styles from "./home.module.css";
import logo from "../../assets/logo.svg";

import cloud1 from "../../assets/cloud/cloud_01.svg";
import cloud2 from "../../assets/cloud/cloud_02.svg";
import cloud3 from "../../assets/cloud/cloud_03.svg";
import cloud4 from "../../assets/cloud/cloud_04.svg";
import cloud5 from "../../assets/cloud/cloud_05.svg";
import { ChangeAvatar } from "@/components/change-avatar/change-avatar";

export function Home() {
  const [loginOrGuest, setLoginOrGuest] = useState<"login" | "guest">("guest");
  const clouds = [cloud1, cloud2, cloud3, cloud4, cloud5];

  return (
    <main className={styles.container}>
      <div className={styles.clouds}>
        {clouds.map((cloud) => (
          <img className={styles.cloud} key={`${cloud}`} src={cloud} alt="" />
        ))}
      </div>

      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles["container-login"]}>
        <header className={styles["header-container"]}>
          <button
            className={
              loginOrGuest === "guest"
                ? styles["button-header-primary"]
                : styles["button-header-secondary"]
            }
            onClick={() => setLoginOrGuest("guest")}
            type="button"
          >
            Convidado
          </button>
          <button
            className={
              loginOrGuest === "login"
                ? styles["button-header-primary"]
                : styles["button-header-secondary"]
            }
            onClick={() => setLoginOrGuest("login")}
            type="button"
          >
            Entrar com uma conta
          </button>
        </header>

        <div className={styles["container-content"]}>
          {loginOrGuest === "guest" ? <FormGuest /> : ""}
          {loginOrGuest === "login" ? <FormUser /> : ""}
          <ChangeAvatar />
        </div>
      </div>
      <div className={styles["bg-world"]} />
    </main>
  );
}
