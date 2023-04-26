import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import styles from "./change-avatar.module.css";
import spinner from "@/assets/spinner.svg";

interface AvatarProps {
  url: string;
  seed: number;
}

export function ChangeAvatar() {
  const [avatarUrl, setAvatarURl] = useState<AvatarProps>();
  const [isLoading, setIsloading] = useState<boolean>(false);

  const cachedDataAvatar = localStorage.getItem("cachedDataAvatar");

  async function handleAvatar() {
    try {
      setIsloading(true);
      const response = await axios.get(
        "https://uno-backend-production.up.railway.app/avatars"
      );
      localStorage.setItem("cachedDataAvatar", JSON.stringify(response.data));
      if (cachedDataAvatar) {
        setAvatarURl(JSON.parse(cachedDataAvatar));
      } else {
        setAvatarURl(response.data);
      }
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        // eslint-disable-next-line no-alert
        alert(err.response?.data?.message);
      }
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    handleAvatar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["avatar-container"]}>
      {isLoading ? (
        <img
          src={
            cachedDataAvatar
              ? JSON.parse(cachedDataAvatar)?.url
              : avatarUrl?.url
          }
          alt="avatar"
        />
      ) : (
        <img src={avatarUrl?.url} alt="avatar" />
      )}
      <button
        className={styles["button-change"]}
        onClick={() => handleAvatar()}
        disabled={isLoading}
        type="button"
      >
        <img
          src={spinner}
          className={isLoading ? styles.spin : ""}
          alt="spinner"
        />
      </button>
    </div>
  );
}