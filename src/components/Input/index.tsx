import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  mask?: string;
}

const Input: React.FC<InputProps> = ({ label, name, type, placeholder, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

export default Input;