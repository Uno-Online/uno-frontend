import { z } from 'zod';

export type FormLogin = z.infer<typeof loginFormScheme>;

export const loginFormScheme = z
  .object({
    email: z.string().min(1, 'Campo em branco').email('Email incorreto'),
    name: z.string().min(1, 'Campo em branco'),
    password: z.string().min(1, 'Campo em branco'),
    confirm_password: z.string().min(1, 'Campo em branco'),
  })
  .superRefine(({ confirm_password, password }, context) => {
    if (confirm_password === password) return;

    context.addIssue({
      code: 'custom',
      message: 'Senhas não coincidem...',
      path: ['confirm_password'],
    });
  });
