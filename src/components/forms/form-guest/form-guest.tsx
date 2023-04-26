/* eslint-disable react/jsx-props-no-spreading */

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cookies } from "react-cookie";
import { AxiosError } from "axios";
import { useState } from "react";
import { api } from "@/api";
import styles from "./form-guest.module.css";

interface LogimGuestProps {
  name: string;
  room: string;
}

export function FormGuest() {
  const [serverError, setServerError] = useState<string>("");

  const cookies = new Cookies();

  
  const loginFormSechema = z.object({
    name: z.string().min(3, { message: "Nome inválido" }),
    room: z.string().min(4, { message: "Número de sala invaído" }),
  });

  type LoginFormType = z.infer<typeof loginFormSechema>;

  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSechema),
  });


  async function login({ name, room }: LogimGuestProps) {
    try {
      const numRoom = Number(room);
      const response = await api.post("/login-guest", { name, numRoom });
      cookies.set("@unoToken", response.data.token);
      cookies.set("@unoID", response.data.id);
      window.location.href = "/rooms";
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
          <label htmlFor="name">
            <span>Escolha seu Nick</span>
            <input
              type="text"
              className={errors.name?.message ? `${styles["input-error"]}` : ""}
              {...register("name")}
              placeholder="SeuNickAqui"
            />
            {errors.name?.message ? (
              <small className={styles["form-error"]}>
                {errors.name?.message}
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
          Entrar
        </button>
      </div>
    </form>
  );
}
