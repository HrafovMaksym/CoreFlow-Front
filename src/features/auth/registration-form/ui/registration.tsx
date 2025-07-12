"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./registration-styles.module.scss";

import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslations } from "next-intl";

import { RegistrationData } from "@/shared/types/auth";
import { InputForm } from "@/shared/ui/input-form";
import { Devider } from "@/shared/ui/devider";
import { useAppDispatch } from "@/shared/lib/hooks/redux-hook";
import { registration } from "../../model/auth-slice";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  const t = useTranslations("RegistrationPage");

  const dispatch = useAppDispatch();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>();

  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<RegistrationData> = async (data) => {
    try {
      const result = await dispatch(registration(data)).unwrap();
      if (result.message === "User created successfully") {
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
          label="Name"
          type="text"
          placeholder={t("namePlaceholder")}
          register={register("name", { required: t("nameRequired") })}
          errorType="name"
          errors={errors}
        />
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
        />{" "}
        {error && <p className={styles.error}>{error}</p>}
        <button className={styles.submit} type="submit">
          {t("submit")}
        </button>
        <Devider />
        <div className={styles.linkContainer}>
          <span>{t("haveAccount")}</span>
          <Link href={"/login"}>{t("login")}</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
