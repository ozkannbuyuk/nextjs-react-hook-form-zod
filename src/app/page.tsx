"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorLabel from "@/components/ErrorLabel";

export default function Home() {
  const registerSchema = z.object({
    username: z.string().min(2, "At least 2 characters!"),
    password: z
      .string()
      .min(8, "At least 8 characters!")
      .max(16, "Maximum 16 characters!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async () => {
    alert("it works");
  };

  return (
    <main className="h-screen grid place-items-center">
      <form
        className="max-w-xs w-full flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="">
          <input
            {...register("username")}
            type="text"
            placeholder="Username"
            className="w-full border border-gray-200 rounded-2xl p-2 text-sm"
          />
          <ErrorLabel label={errors.username?.message} />
        </label>
        <label>
          <input
            {...register("password")}
            type="text"
            placeholder="Password"
            className="w-full border border-gray-200 rounded-2xl p-2 text-sm"
          />
          <ErrorLabel label={errors.password?.message} />
        </label>
        <button className="bg-blue-200 p-2 rounded-2xl text-blue-900">
          Login
        </button>
      </form>
    </main>
  );
}
