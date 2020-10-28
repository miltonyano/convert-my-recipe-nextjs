import React, { ButtonHTMLAttributes } from 'react';

import { ButtonComponentContainer } from '@/styles/components/Button';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <ButtonComponentContainer type="button" {...rest}>
    {loading ? 'Loading...' : children}
  </ButtonComponentContainer>
);

export default Button;
