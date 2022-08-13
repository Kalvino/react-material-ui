import { Controller, useForm, useFormState } from "react-hook-form";
import { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';


type FormFieldElement =
  | typeof TextField
  | typeof Checkbox;


const FormField = <T extends FormFieldElement>({
  name,
  Component,
  label,
  rules,
  variant = "outlined",
  size = "small",
  margin = "dense"
}) => {

  const formState = useFormState();

  return (
    <Controller
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Component
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          error={Boolean(formState.errors && formState.errors[name])}
          helperText={formState.errors && formState.errors[name]?.message}
          label={label}
          variant={variant}
          style={style}
          margin
          {...restProps}
        />
      )}

      rules={rules}
    />
  )

}

export default FormField;
