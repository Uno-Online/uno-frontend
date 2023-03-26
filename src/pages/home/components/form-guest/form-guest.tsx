/* eslint-disable spaced-comment */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useState } from "react";
import styles from "../../styles.module.css";
import { api } from "../../../../api";

interface FormProps {
  setLoginOrGuest: (typeForm: "login" | "guest") => void;
}

interface LogimGuestProps {
  name: string;
  room: string;
}

export function FormGuest({ setLoginOrGuest }: FormProps) {
  const [serverError, setServerError] = useState<string>("");

  const cookies = new Cookies();

  //schema form
  const loginFormSechema = z.object({
    name: z.string().min(3, { message: "Nome inválido" }),
    room: z.string().min(4, { message: "Número de sala invaído" }),
  });

  type LoginFormType = z.infer<typeof loginFormSechema>;

  //useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSechema),
  });

  //get login to rooms
  async function login({ name, room }: LogimGuestProps) {
    try {
      const numRoom = Number(room);
      const response = await api.post("/login-guest", { name, numRoom });
      cookies.set("@unoToken", response.data.token);
      cookies.set("@unoID", response.data.id);
      location.href = "/rooms";
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        setServerError(err.response?.data?.message);
      }
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(login)}>
      <div className={styles["content-form"]}>
        <header className={styles["header-form"]}>
          <button
            type="button"
            className={styles["button-header-secondary"]}
            onClick={() => {
              reset();
              setLoginOrGuest("login");
            }}
          >
            Entrar
          </button>
          <button type="button" className={styles["button-header-primary"]}>
            Convidado
          </button>
        </header>
        {serverError ?? (
          <small className={styles["form-error"]}>{serverError}</small>
        )}
        <div className={styles["input-group"]}>
          <label htmlFor="name">
            <span>Nome</span>
            <input
              type="text"
              className={errors.name?.message ? `${styles["input-error"]}` : ""}
              {...register("name")}
              placeholder="Escolha seu nick"
            />
            {errors.name?.message ? (
              <small className={styles["form-error"]}>
                {errors.name?.message}
              </small>
            ) : (
              ""
            )}
          </label>
          <label htmlFor="number">
            <span>Sala</span>
            <input
              type="number"
              className={errors.room?.message ? `${styles["input-error"]}` : ""}
              {...register("room")}
              placeholder="Digite o código da sala"
            />
            {errors.room?.message ? (
              <small className={styles["form-error"]}>
                {errors.room?.message}
              </small>
            ) : (
              ""
            )}
          </label>
        </div>
        <button
          aria-label="Entrar"
          type="submit"
          disabled={isSubmitting}
          className={styles["button-form"]}
        >
          {" "}
          Entrar{" "}
        </button>
        <div className={styles["area-help"]}>
          <Link to="/create-room">Criar nova sala</Link>
        </div>
      </div>
    </form>
  );
}
