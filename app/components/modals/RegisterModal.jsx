"use client";

import { signIn } from "next-auth/react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useUserMenu from "@/app/hooks/useUserMenu";
import { useStore } from "zustand";

import Modal from "./Modal";
import Button from "../Button";
import Link from "next/link";
import Input from "../inputs/Input";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const RegisterModal = () => {
  // const { isOpen, onClose, onOpen } = useStore(useRegisterModal);
  const { toggleMenu } = useStore(useUserMenu);
  const registerModal = useRegisterModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const submitHandler = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post("/api/register", data);

      if (response.status >= 200 && response.status < 300) {
        toast.success("Your account successfully registered!");
        registerModal.onClose();

        router.push("/");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(`error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col  gap-4 ">
      <h1 className="text-2xl font-bold">Welcome to Airbnb</h1>
      <p className="text-neutral-500 font-light text-sm">Create an account!</p>

      <Input
        type="email"
        id="email"
        label="Email"
        name="email"
        errors={errors.email}
        register={register}
      />
      <Input
        type="text"
        id="name"
        label="Name"
        name="name"
        errors={errors.name}
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
            onClick={() => registerModal.onClose()}
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
        title="Register"
        actionLabel="Continue"
        isOpen={registerModal.isOpen}
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(submitHandler)}
      />
    </div>
  );
};

export default RegisterModal;
