import { styles } from "../styles/styles";
import React, { ChangeEvent } from "react";

type FormInputGroupProps = {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FormInputGroup = (props: FormInputGroupProps) => {
  const { name, placeholder, value, onChange, label, type } = props;
  return (
    <label htmlFor={name} className={styles.label}>
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
};

export default FormInputGroup;
