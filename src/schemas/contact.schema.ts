import * as z from "zod";

export const ContactSchema = z.object({
  firstname: z
    .string()
    .nonempty({
      message: "Imię jest wymagane",
    })
    .min(2, {
      message: "Imię musi mieć co najmniej 2 znaki",
    })
    .max(50, {
      message: "Imię może mieć maksymalnie 50 znaków",
    }),
  lastname: z
    .string()
    .nonempty({
      message: "Nazwisko jest wymagane",
    })
    .min(2, {
      message: "Nazwisko musi mieć co najmniej 2 znaki",
    })
    .max(50, {
      message: "Nazwisko może mieć maksymalnie 50 znaków",
    }),
  email: z
    .email({
      message: "Podano nieprawidłowy adres e-mail",
    })
    .nonempty({
      message: "E-mail jest wymagany",
    }),
  message: z
    .string()
    .nonempty({
      message: "Wiadomość jest wymagana",
    })
    .min(2, {
      message: "Treść wiadomości musi mieć co najmniej 2 znaki",
    })
    .max(500, {
      message: "Treść wiadomości może mieć maksymalnie 500 znaków",
    }),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Musisz zaakceptować politykę prywatności",
  }),
});
