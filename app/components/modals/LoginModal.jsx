"use client";

import { signIn } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useUserMenu from "@/app/hooks/useUserMenu";

import { useStore } from "zustand";

import Modal from "./Modal";
import Button from "../Button";
import Link from "next/link";
import Input from "../inputs/Input";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  // const { isOpen, onClose, onOpen } = useStore(useLoginModal);
  const { toggleMenu } = useStore(useUserMenu);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = async (data) => {
    try {
      const callback = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const bodyContent = (
    <div className="flex flex-col  gap-4 ">
      <h1 className="text-2xl font-bold">Welcome back</h1>
      <p className="text-neutral-500 font-light text-sm">
        Login to your account!
      </p>

      <Input
        type="email"
        id="email"
        label="Email"
        name="email"
        errors={errors.email}
        register={register}
      />
      <Input
        type="password"
        name="password"
        id="password"
        label="Password"
        errors={errors.password}
        register={register}
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />

      <div className="text-neutral-500 font-light text-sm text-center mt-4">
        <p>
          Already have an account?{" "}
          <Link
            href="/register"
            onClick={() => loginModal.onClose()}
            className="font-semibold text-neutral-800 hover:underline cursor-pointer">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        body={bodyContent}
        footer={footerContent}
        title="Login"
        actionLabel="Continue"
        isOpen={loginModal.isOpen}
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(submitHandler)}
      />
    </div>
  );
};

export default LoginModal;
