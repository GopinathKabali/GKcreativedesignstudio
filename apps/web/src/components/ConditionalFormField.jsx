import React from 'react';
import FormField from '@/components/FormField';

const ConditionalFormField = ({ 
  condition, 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  required = false,
  options = [],
  placeholder = ''
}) => {
  if (!condition) return null;

  return (
    <FormField
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      options={options}
      placeholder={placeholder}
    />
  );
};

export default ConditionalFormField;