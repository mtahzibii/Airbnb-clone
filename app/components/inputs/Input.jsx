"use client";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

const Input = ({ name, id, type, register, label, formatPrice, errors }) => {
  return (
    <div className="w-full relative">
      <input
        name={name}
        id={id}
        type={type}
        {...register(id, { required: true })}
        placeholder=""
        className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errors ? "border-rose-500" : "border-neutral-300"}
          ${errors ? "focus:border-rose-500" : "focus:border-black"}`}
      />
      <label
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-4
          top-5 
          z-10 
          origin-[0] 
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-[60%]
          peer-focus:-translate-y-4
          ${errors ? "text-rose-500" : "text-zinc-400"}
        `}>
        {label}
      </label>
    </div>
  );
};

export default Input;
