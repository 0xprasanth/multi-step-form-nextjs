import { useFormContext } from "@/hook/use-form-context";
import React from "react";
import { useForm } from "react-hook-form";

function StepOneForm({ onNext }: { onNext: () => void }) {
  const { formData, setFormData } = useFormContext();
  const { register, handleSubmit } = useForm({ defaultValues: formData.step1 });
  const onSubmit = (data: any) => {
    setFormData({ ...formData, step1: data });
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-around flex-col gap-4"
    >
      <div className="flex gap-4 items-center p-6 m-4">
        <label htmlFor="Name">Name</label>
        <input
          {...register("name")}
          required
          className=" border border-slate-600"
        />
      </div>

      <div className="flex gap-4 items-center p-6">
        <label htmlFor="Email">Email</label>
        <input
          {...register("email")}
          required
          className=" border border-slate-600"
        />
      </div>

      <button type="submit" className="border border-black p-4">
        Next
      </button>
    </form>
  );
}

export default StepOneForm;
