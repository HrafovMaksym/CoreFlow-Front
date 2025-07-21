"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./login-styles.module.scss";

import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslations } from "next-intl";

import { InputForm } from "@/shared/ui/input-form";
import { Devider } from "@/shared/ui/devider";
import { LoginFormData, loginSchema } from "../../model/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/shared/lib/hooks/redux-hook";

import { login } from "../../model/auth-slice";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const t = useTranslations("LoginPage");

  const dispatch = useAppDispatch();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const [error, setError] = useState("");
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const result = await dispatch(login(data)).unwrap();
      if (result.message === "User login successfully") {
        router.push("/");
      } else {
        throw new Error();
      }
    } catch (err: unknown) {
      const error = err as string;
      setError(error || t("ErrorGlobalMess"));
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>{t("title")}</h1>
        <InputForm
          label="Email"
          type="email"
          placeholder={t("emailPlaceholder")}
          register={register("email")}
          errorType="email"
          errors={errors}
        />
        <InputForm
          label="Password"
          type="password"
          placeholder={t("passwordPlaceholder")}
          register={register("password")}
          errorType="password"
          errors={errors}
        />
        <div className={styles.forgotPasswordContainer}>
          <Link className={styles.forgotPassword} href={"#"}>
            {t("forgotPassword")}
          </Link>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button className={styles.submit} type="submit">
          {t("submit")}
        </button>
        <Devider />

        <div className={styles.linkContainer}>
          <span>{t("needAccount")}</span>
          <Link href={"/registration"}>{t("register")}</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
