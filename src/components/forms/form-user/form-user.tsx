/* eslint-disable spaced-comment */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import styles from "./form-user.module.css";
import { api } from "@/api";
import { CardHorizontal } from "@/components/common";


interface FormProps {
  setLoginOrGuest: (typeForm: "login" | "guest") => void;
}

interface LoginProps {
  email: string;
  password: string;
  checkbox: boolean;
}



export function FormUser({ setLoginOrGuest }: FormProps) {
  const [serverError, setServerError] = useState<string>("");

  const cookies = new Cookies();

  //schema form
  const loginFormSechema = z.object({
    email: z.string().email({ message: "Email inválido" }),
    password: z
      .string()
      .min(4, { message: "A senha deve ter pelo menos 4 caracteres" }),
    checkbox: z.boolean(),
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
  async function login({ email, password, checkbox }: LoginProps) {
    try {
      const response = await api.post("/login", {
        email,
        password,
        rememberLogin: checkbox,
      });
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
          <button type="button" className={styles["button-header-primary"]}>
            Entrar
          </button>
          <button
            type="button"
            className={styles["button-header-secondary"]}
            onClick={() => {
              reset();
              setLoginOrGuest("guest");
            }}
          >
            Convidado
          </button>
        </header>

        {serverError ?? (
          <small className={styles["form-error"]}>{serverError}</small>
        )}
        <div className={styles["input-group"]}>
          <label className={styles.label} htmlFor="email">
            <span>Email</span>
            <input
              type="email"
              className={
                errors.password?.message ? `${styles["input-error"]}` : ""
              }
              placeholder="Digite seu email"
              {...register("email")}
            />
            {errors.email?.message ? (
              <small className={styles["form-error"]}>
                {errors.email?.message}
              </small>
            ) : (
              ""
            )}
          </label>

          <label className={styles.label} htmlFor="password">
            <span>Password</span>
            <input
              type="password"
              className={
                errors.password?.message ? `${styles["input-error"]}` : ""
              }
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password?.message ? (
              <small className={styles["form-error"]}>
                {errors.password?.message}
              </small>
            ) : (
              ""
            )}
          </label>

          <label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <span>Lembrar credenciais por 30 dias</span>
          </label>
        </div>
        <button
          aria-label="Entrar"
          disabled={isSubmitting}
          type="submit"
          className={styles["button-form"]}
        >
          Entrar
        </button>
        <div className={styles["area-help"]}>
          <Link to="/forget-password">Esqueci minha senha</Link>
          <Link to="/create-account">Crie sua conta</Link>
        </div>
      </div>
    </form>
  );
}
