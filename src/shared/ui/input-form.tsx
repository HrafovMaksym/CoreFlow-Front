"use client";
import React, { useState } from "react";
import { RegistrationData } from "../types/auth";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useTranslations } from "next-intl";

type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  errors: FieldErrors<RegistrationData>;
  errorType: keyof RegistrationData;
  register: UseFormRegisterReturn;
};
export const InputForm = ({
  label,
  type,
  placeholder,
  errors,
  register,
  errorType,
}: InputProps) => {
  const t = useTranslations("ValidationMessages");
  const [isVisible, setIsVisible] = useState(false);

  const inputType =
    type === "password" ? (isVisible ? "text" : "password") : type;

  const isError = Boolean(errors[errorType]);

  const errorMessage = errors[errorType]?.message;

  const errorT = errorMessage ? t(String(errorMessage)) : "";

  return (
    <div className="relative w-full">
      <label className="">{label}</label>
      <input
        className="w-full mt-1 px-3 py-2 outline-none border rounded-lg"
        type={inputType}
        placeholder={placeholder}
        {...register}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          className="absolute top-9 right-3 cursor-pointer"
        >
          {!isVisible ? <Eye /> : <EyeOff />}
        </button>
      )}

      <p className="text-red-500 my-2">{isError && <span>{errorT}</span>}</p>
    </div>
  );
};
