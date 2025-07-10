"use client";
import React from "react";
import Link from "next/link";
import styles from "./login-styles.module.scss";

import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslations } from "next-intl";

import { RegistrationData } from "@/shared/types/auth";
import { InputForm } from "@/shared/ui/input-form";
import { Devider } from "@/shared/ui/devider";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>();

  const t = useTranslations("LoginPage");

  const onSubmit: SubmitHandler<RegistrationData> = (data) => console.log(data);
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>{t("title")}</h1>
        <InputForm
          label="Email"
          type="email"
          placeholder={t("emailPlaceholder")}
          register={register("email", { required: t("emailRequired") })}
          errorType="email"
          errors={errors}
        />
        <InputForm
          label="Password"
          type="password"
          placeholder={t("passwordPlaceholder")}
          register={register("password", { required: t("passwordRequired") })}
          errorType="password"
          errors={errors}
        />
        <div className={styles.forgotPasswordContainer}>
          <Link className={styles.forgotPassword} href={"#"}>
            {t("forgotPassword")}
          </Link>
        </div>
        <button className={styles.submit} type="submit">
          {t("submit")}
        </button>
        <Devider />

        <div className={styles.linkContainer}>
          <span>{t("needAccount")}</span>
          <Link href={"/login"}>{t("register")}</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
