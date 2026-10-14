import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';

const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  required = false,
  options = [],
  placeholder = '',
  className = ''
}) => {
  const renderInput = () => {
    if (type === 'select') {
      return (
        <Select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={className}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      );
    }

    if (type === 'textarea') {
      return (
        <Textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={className}
        />
      );
    }

    return (
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={className}
      />
    );
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      {renderInput()}
    </div>
  );
};

export default FormField;