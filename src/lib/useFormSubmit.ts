"use client";

import { useState, FormEvent } from "react";

interface UseFormSubmitOptions {
  requiredFields: string[];
  onSuccess?: () => void;
}

interface FormErrors {
  [key: string]: string;
}

export default function useFormSubmit({ requiredFields, onSuccess }: UseFormSubmitOptions) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: FormErrors = {};

    requiredFields.forEach((field) => {
      const value = formData.get(field);
      if (!value || (typeof value === "string" && value.trim() === "")) {
        newErrors[field] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccess?.();

      // Reset form
      (e.target as HTMLFormElement).reset();

      // Reset submitted state after toast duration
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  const clearError = (field: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  return { handleSubmit, errors, isSubmitting, isSubmitted, setSubmitted: setIsSubmitted, clearError };
}
