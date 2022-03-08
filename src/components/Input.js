import dynamic from 'next/dynamic';
import React from 'react';
import { FieldSetText } from '../styles/StyledForm';

function Input({
  label,
  component: Component,
  htmlFor,
  type,
  name,
  id,
  ...restProps
}) {
  return (
    <FieldSetText>
      <label htmlFor={htmlFor}>{label}</label>
      <Component type={type} name={name} id={id} {...restProps} />
    </FieldSetText>
  );
}

export default dynamic(() => Promise.resolve(Input), { ssr: false });

