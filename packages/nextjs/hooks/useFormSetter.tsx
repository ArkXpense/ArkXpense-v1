import { useState } from "react";

type Validator<T> = (value: T) => string | null;

type FormState<T> = {
  [K in keyof T]: T[K];
};

type ValidationState<T> = {
  [K in keyof T]?: string | null;
};

type FormSetter<T> = <K extends keyof T>(field: K, value: T[K]) => void;

export function useFormSetterWithValidation<T extends object>(
  initialState: T,
  validators: Partial<{ [K in keyof T]: Validator<T[K]> }>
): [FormState<T>, FormSetter<T>, ValidationState<T>] {
  const [formState, setFormState] = useState<FormState<T>>(initialState);
  const [errors, setErrors] = useState<ValidationState<T>>({});

  const setField: FormSetter<T> = (field, value) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (validators[field]) {
      const error = validators[field]!(value);
      setErrors((prev) => ({
        ...prev,
        [field]: error,
      }));
    }
  };

  return [formState, setField, errors];
}