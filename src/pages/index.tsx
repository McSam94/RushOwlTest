import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "@/components/input";
import { useCallback } from "react";
import axios from "@/hooks/axios";
import { useRouter } from "next/router";
import Button from "@/components/button";

interface LoginForm {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function Home() {
  const { push } = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: yupResolver(validationSchema),
  });

  const onLogin = useCallback(
    async (data: LoginForm) => {
      try {
        await axios({
          url: "/api/login",
          method: "POST",
          data,
        }).catch(() => {
          // no such API
          push("/q2");
        });
      } catch (error) {
        console.error(error);
      } finally {
        reset();
      }
    },
    [push, reset]
  );

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onLogin)}
        className="flex flex-col max-w-96 shadow-xl p-5 rounded-lg"
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Welcome back!
        </h1>
        <div className="flex flex-col space-y-5">
          <Input
            label="Email"
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
        </div>
        <Button type="submit" className="mt-3" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
