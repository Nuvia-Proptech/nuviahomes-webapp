import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

export const useFormManager = ({ validator }: Yup.InferType<any> = {}) => {
  const resolver = validator ? yupResolver(validator) : undefined;
  const methods = useForm({
    shouldUseNativeValidation: false,
    shouldUnregister: true,
    resolver,
  });

  const getErrorMessage = (name: string) => {
    return methods.formState.errors[name]?.message as string;
  };

  return { ...methods, getErrorMessage };
};
