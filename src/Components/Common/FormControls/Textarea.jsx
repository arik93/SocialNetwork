import React from 'react';
import FormStyle from './FormStyle.module.css';

const {
  formControl,
  error
} = FormStyle

export default function Textarea({ input, meta, ...props }) {
  const hasError = meta.touched && meta.error;

  return (
    <div className={formControl + " " + (hasError ? error : "")}>
      <div>
        <textarea {...props} {...input} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}
