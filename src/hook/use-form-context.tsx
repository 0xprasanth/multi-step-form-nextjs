"use client";
import { createContext, useContext, useState } from "react";

interface FormData {
  step1: { name: string; email: string };
  step2: { address: string; city: string };
}
interface FormContextType {
  formData: FormData;
  setFormData: (data: FormData) => void;
}
const initialFormData: FormData = {
  step1: { name: "", email: "" },
  step2: { address: "", city: "" },
};

// Update FormContext with correct value type
const FormContext = createContext<FormContextType>({
  formData: initialFormData,
  setFormData: (data: FormData) => {},
});

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
