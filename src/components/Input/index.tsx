import React, { InputHTMLAttributes } from 'react';

import { Field, ErrorMessage } from 'formik';
import MaskedInput from 'react-text-mask';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  mask?: string;
}

const phoneNumberMask = [
  "(",
  /[1-9]/,
  /\d/,
  ")",
  " ",
  "9",
  /[1-9]/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

const cpfMask = [
  /[1-9]/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
]

const Input: React.FC<InputProps> = ({ label, name, type, placeholder, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>

      <Field
        name={name} placeholder={placeholder} type={type}
      /> <br />
      <ErrorMessage name={name} />
      {/* <input
        id={name}
        name={name}
        type={type}
        {...rest}
      /> */}
    </div>
  );
}

export default Input;