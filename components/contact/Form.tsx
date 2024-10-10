"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const sendEmail = (params: Record<string, unknown>) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // you can not send more than 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    const templateParams = {
      to_name: "Emil",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(templateParams);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <input
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        type="text"
        placeholder="name"
        {...register("name", {
          required: "This field is required",
          minLength: {
            value: 3,
            message: "Name should be atleast 3 characters long",
          },
        })}
      />
      {errors.name && (
        <span className="inline-block self-start text-accent">
          {errors.name.message}
        </span>
      )}
      <input
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        type="email"
        placeholder="email"
        {...register("email", { required: "This field is required" })}
      />
      {errors.email && (
        <span className="inline-block self-start text-accent">
          {errors.email.message}
        </span>
      )}
      <textarea
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        placeholder="message"
        {...register("message", {
          required: "This field is required",
          maxLength: {
            value: 500,
            message: "Message should be less than 500 characters long",
          },
          minLength: {
            value: 50,
            message: "Message should be more than 50 characters long",
          },
        })}
      />
      {errors.message && (
        <span className="inline-block self-start text-accent">
          {errors.message.message}
        </span>
      )}
      <input
        value="Cast your message!"
        className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm 
        backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        type="submit"
      />
    </form>
  );
};

export default Form;
