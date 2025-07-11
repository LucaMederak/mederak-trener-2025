"use client";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import React, { useTransition } from "react";
import { sendContactMessage } from "@/actions/contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactSchema } from "@/schemas/contact.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

//assets
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [isPending, startTransition] = useTransition();
  // 1. Define your form.
  const form = useForm<z.infer<typeof ContactSchema>>({
    mode: "onBlur",
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      privacy: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof ContactSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    startTransition(() => {
      sendContactMessage(values).then((data) => {
        console.log(data);
        // handleAlert(data.type, data.message);
      });
    });
  }

  return (
    <>
      <section id="contact" className="w-full py-8 md:py-12">
        <Container className="flex flex-col items-center justify-center">
          <PageHeading
            title="Skontaktuj się ze mną"
            description="Masz pytania lub chcesz umówić się na wstępną konsultację? Napisz wiadomość i zaproponuj dogodny termin – odezwę się najszybciej, jak to możliwe."
            headerType="h2"
            position="center"
            badgeType="default"
            badgeText="Kontakt"
          />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-white p-8 rounded-lg flex flex-col gap-4 w-full max-w-4xl border border-slate-200/80"
            >
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imię</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nazwisko</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Treść wiadomości</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* ✅ CHECKBOX */}
              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start space-y-1 w-full">
                    <div className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) =>
                            field.onChange(checked === true)
                          }
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        Zapoznałem się z polityką prywatności
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isPending || !form.formState.isValid}
              >
                {isPending && <LoadingSpinner />}
                Wyślij wiadomość
              </Button>
            </form>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default Contact;
