import React, { InputHTMLAttributes } from 'react';
import MaskedInput from 'react-text-mask';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  mask: string;
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


const InputMask: React.FC<InputProps> = ({ label, name, type, mask, ...rest }) => {

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <MaskedInput
        name={name}
        id={name}
        mask={mask === 'phone' ? phoneNumberMask : cpfMask}
        type={type}
        {...rest}
      />
    </div>
  );
}

export default InputMask;