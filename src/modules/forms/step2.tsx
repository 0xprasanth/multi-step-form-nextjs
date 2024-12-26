import { useFormContext } from "@/hook/use-form-context";
import React from "react";
import { useForm } from "react-hook-form";

function StepTwoForm({
  onNext,
  onPrev,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  const { formData, setFormData } = useFormContext();
  const { register, handleSubmit } = useForm({ defaultValues: formData.step2 });
  const onSubmit = (data: any) => {
    setFormData({ ...formData, step2: data });
    onNext();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" {...register("address")} required />

        <label htmlFor="city">City</label>
        <input type="text" id="address" {...register("city")} required />

        <button type="button" onClick={onPrev}>
          Previous
        </button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default StepTwoForm;
