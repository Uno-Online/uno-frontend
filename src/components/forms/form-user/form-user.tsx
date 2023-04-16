/* eslint-disable react/jsx-props-no-spreading */

import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import styles from "./form-user.module.css";
import { api } from "@/api";

interface LoginProps {
  email: string;
  password: string;
}

export function FormUser() {
  const [serverError, setServerError] = useState<string>("");

  const cookies = new Cookies();

  // schema form
  const loginFormSchema = z.object({
    email: z.string().email({ message: "Email inválido" }),
    password: z
      .string()
      .min(4, { message: "A senha deve ter pelo menos 4 caracteres" }),
  });

  type LoginFormType = z.infer<typeof loginFormSchema>;

  // useForm
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  // get login to rooms
  async function login({ email, password }: LoginProps) {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      cookies.set("@unoToken", response.data.token);
      cookies.set("@unoID", response.data.id);
      // eslint-disable-next-line no-restricted-globals
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
        </div>
        <div className={styles["area-buttons"]}>
          <button
            className={styles["button-enter"]}
            disabled={isSubmitting}
            type="submit"
          >
            Entrar
          </button>
          <Link
            className={styles["button-new-account"]}
            target="_blank"
            to="/create-account"
          >
            Cadastrar-se
          </Link>
        </div>

        <div className={styles["area-help"]}>
          <Link to="/forget-password">Esqueci minha senha</Link>
        </div>
      </div>
    </form>
  );
}
