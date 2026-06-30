"use server";

import { ContactSchema } from "@/schemas/contact.schema";
import * as z from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type Message = {
  type: "success" | "error" | "warning";
  message: string;
};

export const sendContactMessage = async (
  values: z.infer<typeof ContactSchema>
): Promise<Message> => {
  try {
    const validatedFields = ContactSchema.parse(values);

    const { firstname, lastname, email, message } = validatedFields;

    //resend
    const { data, error } = await resend.emails.send({
      from: "Trener Łukasz Męderak <no-reply@lukasz.mederak.com>",
      to: ["lukasz.mederak@gmail.com"],
      replyTo: email,
      subject: `Wiadomość ze strony Trener Łukasz Męderak od ${firstname} ${lastname}`,
      html: `
        <p>Masz nową wiadomość z twojej strony</p><br>
        <p><strong>Imię i nazwisko:</strong> ${firstname} ${lastname}</p><br>
        <p><strong>E-mail:</strong> ${email}</p><br>
        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Błąd Resend:", error);

      return {
        type: "error",
        message: "Nie udało się wysłać wiadomości",
      };
    }

    console.log("Email wysłany:", data?.id);

    return {
      type: "success",
      message: "Wysłano wiadomość",
    };
  } catch (error) {
    console.error("Błąd podczas wysyłania wiadomości:", error);

    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map((issue) => {
        switch (issue.code) {
          case "invalid_type":
            return `Niepoprawny typ dla pola ${issue.path.join(".")}: ${
              issue.message
            }`;
          case "too_small":
            return `Pole ${issue.path.join(".")} jest za krótkie: ${
              issue.message
            }`;
          case "custom":
            return `Błąd w polu ${issue.path.join(".")}: ${issue.message}`;
          default:
            return `Błąd w polu ${issue.path.join(".")}: ${issue.message}`;
        }
      });

      return {
        type: "error",
        message: errorMessages.join(", "),
      };
    }

    return {
      type: "error",
      message: "Nie udało się wysłać wiadomości",
    };
  }
};
