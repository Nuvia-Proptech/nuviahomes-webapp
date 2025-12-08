"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  ControllerProps,
  FieldValues,
  FormProvider,
  useFormContext,
  useFormState,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

/* -------------------------
   FORM PROVIDER
-------------------------- */
const Form = FormProvider;

/* -------------------------
   FIELD CONTEXT
-------------------------- */
interface FormFieldContextValue {
  name: string;
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(
  null
);

/* -------------------------
   FormField Component
-------------------------- */
const FormField = <T extends FieldValues>({
  name,
  ...props
}: ControllerProps<T>) => {
  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller name={name} {...props} />
    </FormFieldContext.Provider>
  );
};

/* -------------------------
   FORM ITEM CONTEXT
-------------------------- */
interface FormItemContextValue {
  id: string;
}

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

/* -------------------------
   useFormField Hook
-------------------------- */
function useFormField() {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);

  if (!fieldContext) {
    throw new Error("useFormField must be used within <FormField>");
  }
  if (!itemContext) {
    throw new Error("useFormField must be used within <FormItem>");
  }

  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });

  const fieldState = getFieldState(fieldContext.name, formState);

  return {
    id: itemContext.id,
    name: fieldContext.name,
    formItemId: `${itemContext.id}-form-item`,
    formDescriptionId: `${itemContext.id}-form-item-description`,
    formMessageId: `${itemContext.id}-form-item-message`,
    ...fieldState,
  };
}

/* -------------------------
   FormItem Wrapper
-------------------------- */
function FormItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

/* -------------------------
   Label
-------------------------- */
function FormLabel({ className, ...props }: React.ComponentProps<"label">) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      htmlFor={formItemId}
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      {...props}
    />
  );
}

/* -------------------------
   Control Wrapper
-------------------------- */
function FormControl(props: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-invalid={!!error}
      aria-describedby={
        error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId
      }
      data-slot="form-control"
      {...props}
    />
  );
}

/* -------------------------
   Description
-------------------------- */
function FormDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      data-slot="form-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

/* -------------------------
   Error Message
-------------------------- */
function FormMessage({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { error, formMessageId } = useFormField();

  const body = error ? String(error.message ?? "") : children;

  if (!body) return null;

  return (
    <p
      id={formMessageId}
      data-slot="form-message"
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}

export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  useFormField,
};
