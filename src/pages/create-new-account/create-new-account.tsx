import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as zod from "zod";
import { TextField } from "@/components";
import styles from "./create-new-account.module.css";

type Form = zod.infer<typeof schema>;

const schema = zod
  .object({
    email: zod.string().min(1, "Campo em branco").email("Email incorreto"),
    name: zod.string().min(1, "Campo em branco"),
    password: zod.string().min(1, "Campo em branco"),
    confirm_password: zod.string().min(1, "Campo em branco"),
  })
  .superRefine(({ confirm_password, password }, context) => {
    if (confirm_password === password) return;

    context.addIssue({
      code: "custom",
      message: "Senhas não coincidem...",
      path: ["confirm_password"],
    });
  });

export function CreateNewAccount() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  return (
    <div className={styles["page-container"]}>
      <header className={styles["header-container"]}>
        <h1 className={styles["header-title"]}>Algum Header Legal</h1>
      </header>

      <main className={styles["main-container"]}>
        <form
          className={styles["form-container"]}
          onSubmit={handleSubmit(() => {})}
        >
          <fieldset className={styles["form-fieldset"]}>
            <legend className={styles["form-legend"]}>Crie Sua Conta</legend>

            <div className={styles["form-fieldset-inputs"]}>
              <Controller
                control={control}
                defaultValue=""
                name="email"
                render={({ field }) => (
                  <TextField
                    error={"email" in errors}
                    helperText={errors.email?.message}
                    label="Email"
                    name={field.name}
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder="Insira seu email"
                    requiredDecoration
                    value={field.value}
                  />
                )}
              />

              <Controller
                control={control}
                defaultValue=""
                name="name"
                render={({ field }) => (
                  <TextField
                    error={"name" in errors}
                    helperText={errors.name?.message}
                    label="Nome"
                    name={field.name}
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder="Insira seu nome"
                    requiredDecoration
                    value={field.value}
                  />
                )}
              />

              <Controller
                control={control}
                defaultValue=""
                name="password"
                render={({ field }) => (
                  <TextField
                    error={"password" in errors}
                    helperText={errors.password?.message}
                    label="Senha"
                    name={field.name}
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder="Insira sua senha"
                    requiredDecoration
                    value={field.value}
                    type="password"
                  />
                )}
              />

              <Controller
                control={control}
                defaultValue=""
                name="confirm_password"
                render={({ field }) => (
                  <TextField
                    error={"confirm_password" in errors}
                    helperText={errors.confirm_password?.message}
                    label="Confirmar Senha"
                    name={field.name}
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    placeholder="Confirme sua senha"
                    requiredDecoration
                    value={field.value}
                    type="password"
                  />
                )}
              />
            </div>
          </fieldset>

          <button className={styles["form-button"]} type="submit">
            Cadastrar Nova Conta
          </button>
        </form>
      </main>
    </div>
  );
}
