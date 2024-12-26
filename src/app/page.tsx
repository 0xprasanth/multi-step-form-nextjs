"use client";
import { FormProvider } from "@/hook/use-form-context";
import StepOneForm from "@/modules/forms/step1";
import StepTwoForm from "@/modules/forms/step2";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleComplete = () => {
    setIsComplete(true);
  };
  // render each step based on the current step state
  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOneForm onNext={handleNext} />;
      case 2:
        return <StepTwoForm onNext={handleComplete} onPrev={handlePrev} />;
      default:
        null;
    }
  };
  return (
    <FormProvider>
      <main className="min-h-screen p-8">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-black border ">
          {!isComplete ? (
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-center mb-4">
                Multi-Step Form
              </h1>
              <div className="flex justify-center mb-4">
                <div className="flex mb-4">
                  <div
                    className={`w-1/2 h-2 ${
                      step >= 1 ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  ></div>
                  <div
                    className={`w-1/2 h-2 ${
                      step >= 2 ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  ></div>
                </div>
                <p className="text-md text-gray-500">Step {step} of 2</p>
              </div>
              {renderStep()}
            </div>
          ) : (
            <>Form Completed</>
          )}
        </div>
      </main>
    </FormProvider>
  );
}
