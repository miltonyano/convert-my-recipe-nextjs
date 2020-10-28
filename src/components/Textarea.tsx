import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { TextareaComponentContainer, TextareaError } from '@/styles/components/Textarea';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  containerStyle?: Record<string, unknown>;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  containerStyle = {},
  ...rest
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  registerField({
    name: fieldName,
    ref: textareaRef.current,
    path: 'value',
  });

  return (
    <TextareaComponentContainer style={containerStyle} isErrored={!!error}>
      <textarea defaultValue={defaultValue} ref={textareaRef} {...rest} />

      {error && (
        <TextareaError title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </TextareaError>
      )}
    </TextareaComponentContainer>
  );
};
export default Textarea;
